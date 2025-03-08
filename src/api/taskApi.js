import AV from '../utils/leancloud';

// 获取指定项目的任务列表
export const getTasksByProject = (projectId) => {
    const query = new AV.Query('Task');
    query.equalTo('projectId', projectId);
    return query.find();
};

// 创建任务（增加startDate）
export const createTask = (projectId, title, description, dueDate) => {
    const Task = new AV.Object('Task');
    Task.set('projectId', projectId);
    Task.set('title', title);
    Task.set('description', description);
    Task.set('status', '待办');
    Task.set('startDate', new Date()); // 🚩 关键：设置startDate为当前时间
    Task.set('dueDate', dueDate);

    const acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);
    Task.setACL(acl);

    return Task.save();
};

// 删除任务
export const deleteTask = (taskId) => {
    const task = AV.Object.createWithoutData('Task', taskId);
    return task.destroy();
};

// 更新任务状态
export const updateTaskStatus = (taskId, status) => {
    const task = AV.Object.createWithoutData('Task', taskId);
    task.set('status', status);
    return task.save();
};

// 获取所有任务
export const getAllTasks = () => new AV.Query('Task').find();

// 获取所有任务（附带项目名称）
export const getAllTasksWithProject = async () => {
    const taskQuery = new AV.Query('Task');
    const tasks = await taskQuery.find();

    const projectIds = [...new Set(tasks.map(t => t.get('projectId')))];
    const projectQuery = new AV.Query('Project');
    projectQuery.containedIn('objectId', projectIds);
    const projects = await projectQuery.find();

    return tasks.map(task => ({
        task,
        project: projects.find(p => p.id === task.get('projectId'))
    }));
};

