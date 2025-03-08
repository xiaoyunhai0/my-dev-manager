import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <>
      <Navbar />  {/* 放置导航栏 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </>
  );
}

export default App;
