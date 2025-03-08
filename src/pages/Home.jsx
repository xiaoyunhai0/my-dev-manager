import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-4 mb-4">📌 个人软件开发管理工具</h1>
            <p className="lead mb-5">高效管理项目，任务进度一目了然</p>

            <div className="row justify-content-center">
                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🗂️ 项目管理</h5>
                            <p className="card-text">创建和管理你的开发项目</p>
                            <Link to="/projects" className="btn btn-primary">进入项目管理</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">✅ 任务管理</h5>
                            <p className="card-text">轻松追踪任务状态与进度</p>
                            <Link to="/tasks" className="btn btn-success">进入任务管理</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">📊 项目进度</h5>
                            <p className="card-text">一键查看项目完成情况</p>
                            <Link to="/projects" className="btn btn-warning">查看项目进度</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
