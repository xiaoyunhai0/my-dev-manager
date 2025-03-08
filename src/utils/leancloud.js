// src/utils/leancloud.js
import AV from 'leancloud-storage';

const APP_ID = '9cOcK5wImo0XrToVJX4OZNT7-gzGzoHsz';
const APP_KEY = 'MhElKWTCXKN1khujH53V9cQG';
const SERVER_URL = 'https://9cock5wi.lc-cn-n1-shared.com';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    serverURL: SERVER_URL
});

export default AV;
