import React from 'react';

export default function ProjectItem({ project }) {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <h5 className="card-title">{project.get('name')}</h5>
                <p className="card-text text-muted">{project.get('description') || '暂无描述'}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">创建于: {new Date(project.createdAt).toLocaleDateString()}</small>
            </div>
        </div>
    );
}
