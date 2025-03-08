import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTasksByProject, createTask, deleteTask, updateTaskStatus } from '../api/taskApi';

export default function ProjectDetail() {
    const { id: projectId } = useParams();
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        loadTasks();
    }, [projectId]);

    const loadTasks = () => {
        getTasksByProject(projectId).then(setTasks).catch(console.error);
    };

    const handleCreateTask = () => {
        createTask(projectId, title, description, new Date(startDate), new Date(dueDate)).then(() => {
            setTitle('');
            setDescription('');
            setStartDate('');
            setDueDate('');
            loadTasks();
        }).catch(console.error);
    };

    const handleDeleteTask = (taskId) => {
        if (window.confirm('确定删除该任务吗？')) {
            deleteTask(taskId).then(loadTasks).catch(console.error);
        }
    };

    const handleStatusToggle = (task) => {
        const nextStatus = task.get('status') === '待办' ? '开发中' : task.get('status') === '开发中' ? '已完成' : '待办';
        updateTaskStatus(task.id, nextStatus).then(loadTasks).catch(console.error);
    };

    return (
        <div className="container mt-4">
            <h2>📋 项目任务管理</h2>

            <div className="card p-4 mb-4 shadow-sm">
                <h5>➕ 创建新任务</h5>
                <input
                    className="form-control mb-2"
                    placeholder="任务标题"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className="form-control mb-2"
                    placeholder="任务描述"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <div className="row">
                    <div className="col-md-6">
                        <label>开始日期：</label>
                        <input type="date" className="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label>截止日期：</label>
                        <input type="date" className="form-control" value={dueDate} onChange={e => setDueDate(e.target.value)} />
                    </div>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleCreateTask}>创建任务</button>
            </div>

            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{task.get('title')}</strong>
                            <p className="text-muted">{task.get('description')}</p>
                            <small className="text-muted">
                                开始：{new Date(task.get('startDate')).toLocaleDateString()}，
                                截止：{new Date(task.get('dueDate')).toLocaleDateString()}
                            </small>
                        </div>
                        <div>
                            <span className="badge bg-info me-2">{task.get('status')}</span>
                            <button className="btn btn-sm btn-success me-2" onClick={() => handleStatusToggle(task)}>切换状态</button>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTask(task.id)}>删除</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}