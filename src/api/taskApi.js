import AV from '../utils/leancloud';

export const getTasksByProject = (projectId) => {
    const query = new AV.Query('Task');
    query.equalTo('projectId', projectId);
    return query.find();
};
