# 📌 My Dev Manager

My Dev Manager 是一个基于 **React + Vite + LeanCloud** 的个人软件开发管理工具，旨在帮助开发者管理项目和任务，提高生产力。

---

## 🚀 功能介绍

- **📂 项目管理**
  - 创建、编辑、删除项目
  - 查看项目详情
  - 关联任务列表

- **✅ 任务管理**
  - 创建、编辑、删除任务
  - 任务状态切换（待办 → 开发中 → 已完成）
  - 任务所属项目显示与跳转

- **📊 进度可视化（待开发）**
  - 任务完成进度条
  - 逾期提醒

---

## 🛠️ 技术栈

- **前端**：React + Vite + Bootstrap
- **后端（数据存储）**：LeanCloud
- **状态管理**：React Hooks
- **版本控制**：Git + GitHub

---

## 📥 安装与运行

### **1. 克隆仓库**
```bash
git clone https://github.com/xiaoyunhai0/my-dev-manager.git
cd my-dev-manager
```

### **2. 安装依赖**
```bash
npm install
```

### **3. 配置 LeanCloud**
在 utils\leancloud.js 文件中添加你的 LeanCloud AppID ， AppKey和ServerURL：
const APP_ID = '你的AppID';
const APP_KEY = '你的AppKey';
const SERVER_URL = '你的你的ServerURL';
```

### **4. 运行开发环境**
```bash
npm run dev
```
浏览器打开：[http://localhost:5173](http://localhost:5173)

---

## 📤 部署

使用 Vercel / Netlify 部署：
```bash
npm run build
```
然后将 `dist/` 目录部署到你的静态网站托管平台。

---

## 📌 API 交互

### **项目 API**
| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/projects` | 获取所有项目 |
| `POST` | `/api/projects` | 创建项目 |
| `PUT` | `/api/projects/:id` | 更新项目 |
| `DELETE` | `/api/projects/:id` | 删除项目 |

### **任务 API**
| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/tasks` | 获取所有任务 |
| `POST` | `/api/tasks` | 创建任务 |
| `PUT` | `/api/tasks/:id/status` | 更新任务状态 |
| `DELETE` | `/api/tasks/:id` | 删除任务 |

---

## 🤝 贡献

欢迎提交 Issue 和 PR 进行改进。

---

## 📜 许可证

本项目采用 MIT 许可证，详细信息请查看 `LICENSE` 文件。

---

## 💡 未来计划

- [ ] 任务拖拽排序
- [ ] 进度可视化
- [ ] GitHub Issue 自动同步

---

### 📞 联系方式
如果你有任何问题，可以在 GitHub 提交 Issue，或者联系我！

