// src/api/projectApi.js
import AV from '../utils/leancloud';

// 获取所有项目
export function getProjects() {
    const query = new AV.Query('Project');
    return query.find();
}

// 创建新项目
export function createProject(name, description) {
    const Project = new AV.Object('Project');
    Project.set('name', name);
    Project.set('description', description);
    return Project.save();
}

// 删除项目
export const deleteProject = (projectId) => {
    const project = AV.Object.createWithoutData('Project', projectId);
    return project.destroy();
};
