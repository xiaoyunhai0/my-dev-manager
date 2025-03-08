import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask, updateTaskStatus } from '../api/taskApi';

export default function TaskPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = () => {
        getAllTasks().then(setTasks).catch(console.error);
    };

    const handleDeleteTask = (id) => {
        if (window.confirm('确定删除该任务吗？')) {
            deleteTask(id).then(loadTasks).catch(console.error);
        }
    };

    const handleChangeStatus = (task) => {
        const currentStatus = task.get('status');
        const nextStatus = currentStatus =>
            currentStatus === '待办' ? '开发中' : currentStatus === '开发中' ? '已完成' : '待办';

        updateTaskStatus(task.id, nextStatus(currentStatus)).then(loadTasks);
    };

    return (
        <div className="container mt-4">
            <h2>📋 所有任务管理</h2>

            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{task.get('title')}</h5>
                            <p className="text-muted">{task.get('description')}</p>
                            <small>
                                状态: <span className="badge bg-secondary">{task.get('status')}</span>
                                &nbsp; 截止: {new Date(task.get('dueDate')).toLocaleDateString()}
                            </small>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-info me-2" onClick={() => handleStatusToggle(task)}>
                                切换状态
                            </button>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTask(task.id)}>
                                删除
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
