import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTasksWithProject, deleteTask, updateTaskStatus } from '../api/taskApi';

export default function TaskPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = () => {
        getAllTasksWithProject().then(setTasks).catch(console.error);
    };

    const handleDeleteTask = (taskId) => {
        if (window.confirm('确定删除该任务吗？')) {
            deleteTask(taskId).then(loadTasks).catch(console.error);
        }
    };

    const handleStatusToggle = (task) => {
        let nextStatus;
        switch (task.get('status')) {
            case '待办': nextStatus = '开发中'; break;
            case '开发中': nextStatus = '已完成'; break;
            default: nextStatus = '待办';
        }

        updateTaskStatus(task.id, nextStatus).then(loadTasks).catch(console.error);
    };

    return (
        <div className="container mt-4">
            <h2>📋 任务管理</h2>

            <ul className="list-group mt-3">
                {tasks.map(({ task, project }) => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{task.get('title')}</h5>
                            <p className="text-muted">{task.get('description')}</p>
                            <small className="text-muted">
                                项目：
                                <Link to={`/projects/${project?.id || ''}`}>
                                    {project ? project.get('name') : '未知项目'}
                                </Link>
                                <br />
                                开始: {new Date(task.get('startDate')).toLocaleDateString()}，
                                截止: {new Date(task.get('dueDate')).toLocaleDateString()}
                            </small>
                        </div>
                        <div>
                            <span className={`badge me-2 ${task.get('status') === '已完成' ? 'bg-success' : task.get('status') === '开发中' ? 'bg-warning' : 'bg-secondary'}`}>
                                {task.get('status')}
                            </span>
                            <button className="btn btn-sm btn-primary me-2" onClick={() => handleStatusToggle(task)}>
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
