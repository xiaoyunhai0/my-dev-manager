import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTasksByProject } from '../api/taskApi';

export default function ProjectDetail() {
    const { id } = useParams();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasksByProject(id).then(setTasks);
    }, [id]);

    return (
        <div className="container mt-4">
            <h2>📌 项目任务列表</h2>
            <ul className="list-group">
                {tasks.map(task => (
                    <li className="list-group-item" key={task.id}>
                        {task.get('title')} - {task.get('status')}
                    </li>
                ))}
            </ul>
        </div>
    );
}
