// src/api/projectApi.js
import AV from '../utils/leancloud';

// 获取所有项目
export const getProjects = () => new AV.Query('Project').find();

// 创建项目
export const createProject = (name, description) => {
    const Project = new AV.Object('Project');
    Project.set('name', name);
    Project.set('description', description);
    Project.setACL(new AV.ACL()); // 默认公开权限
    return Project.save();
};

// 删除项目
export const deleteProject = (projectId) => {
    const project = AV.Object.createWithoutData('Project', projectId);
    return project.destroy();
};

// 编辑项目
export const updateProject = (projectId, name, description) => {
    const project = AV.Object.createWithoutData('Project', projectId);
    project.set('name', name);
    project.set('description', description);
    return project.save();
};
