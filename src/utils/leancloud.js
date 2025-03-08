// src/utils/leancloud.js
import AV from 'leancloud-storage';

const APP_ID = '你的AppID';
const APP_KEY = '你的AppKey';
const SERVER_URL = 'https://9cock5wi.lc-cn-n1-shared.com';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    serverURL: SERVER_URL
});

export default AV;
