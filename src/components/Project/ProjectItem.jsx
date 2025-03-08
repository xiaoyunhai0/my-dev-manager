import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectItem({ project, onDelete, onEdit }) {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <h5 className="card-title">{project.get('name')}</h5>
                <p className="card-text text-muted">{project.get('description') || '暂无描述'}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <Link className="btn btn-sm btn-outline-primary" to={`/projects/${project.id}`}>
                    详情
                </Link>
                <div>
                    <button className="btn btn-sm btn-warning me-2" onClick={onEdit}>
                        编辑
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={onDelete}>
                        删除
                    </button>
                </div>
            </div>
        </div>
    );
}
