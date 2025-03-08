import React from 'react';

export default function ProjectItem({ project, onDelete }) {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <h5 className="card-title">{project.get('name')}</h5>
                <p className="card-text text-muted">{project.get('description') || '暂无描述'}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">创建于: {new Date(project.createdAt).toLocaleDateString()}</small>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(project.id)}>删除</button>
            </div>
        </div>
    );
}
