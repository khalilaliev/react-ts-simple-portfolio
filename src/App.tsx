import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectsDetail from "./pages/ProjectsDetail";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-2xl mx-auto mt-5 pt-20 container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectsDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
