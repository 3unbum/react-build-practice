import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      {/* TODO: 중첩라우팅을 고려해서 총 5개 페이지에 대한 라우팅을 진행해보세요 */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
