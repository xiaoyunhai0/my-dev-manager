import React, { useEffect, useState } from 'react';
import { getProjects, createProject, deleteProject, updateProject } from '../api/projectApi';
import ProjectItem from '../components/Project/ProjectItem';

export default function ProjectPage() {
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = () => {
        getProjects().then(setProjects).catch(console.error);
    };

    const handleCreateOrUpdateProject = () => {
        const action = editingId
            ? updateProject(editingId, name, description)
            : createProject(name, description);

        action.then(() => {
            setName('');
            setDescription('');
            setShowForm(false);
            setEditingId(null);
            loadProjects();
        });
    };

    const handleDelete = (id) => {
        if (window.confirm('确定要删除该项目吗？')) {
            deleteProject(id)
                .then(loadProjects)
                .catch(err => console.error('删除失败:', err));
        }
    };

    const handleEdit = (project) => {
        setEditingId(project.id);
        setName(project.get('name'));
        setDescription(project.get('description'));
        setShowForm(true);
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>🗂️ 项目管理</h2>
                <button className="btn btn-primary" onClick={() => setShowForm(true)}>
                    ➕ 创建新项目
                </button>
            </div>

            <div className="row">
                {projects.map(p => (
                    <div className="col-md-4 mb-3" key={p.id}>
                        <ProjectItem
                            project={p}
                            onDelete={() => handleDelete(p.id)}
                            onEdit={() => handleEdit(p)}
                        />
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="modal d-block bg-dark bg-opacity-50">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{editingId ? '编辑项目' : '创建新项目'}</h5>
                                <button className="btn-close" onClick={() => setShowForm(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    className="form-control mb-3"
                                    placeholder="项目名称"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <textarea
                                    className="form-control"
                                    placeholder="项目描述"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowForm(false)}>
                                    取消
                                </button>
                                <button className="btn btn-primary" onClick={handleCreateOrUpdateProject}>
                                    {editingId ? '更新项目' : '创建项目'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}