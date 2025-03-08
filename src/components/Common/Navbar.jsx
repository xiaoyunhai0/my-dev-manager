import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">🛠️ Dev Manager</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">项目管理</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tasks">任务管理</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
