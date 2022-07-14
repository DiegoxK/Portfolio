import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layout
import MainLayout from "./Components/Layout/MainLayout";

// Views
import Home from "./Views/Home";
import About from "./Views/About";
import Blog from "./Views/Blog";
import BlogPost from "./Views/BlogPost";
import Projects from "./Views/Projects";
import ProjectView from "./Views/ProjectView";
import Error404 from "./Views/Error404";
import Login from "./Views/Login";
import Contact from "./Views/Contact";

//styles
import "./Styles/app.scss";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Blog Page */}
        <Route path="/posts/" element={<MainLayout />}>
          <Route path=":postid" element={<BlogPost />} />
        </Route>

        {/* Project Page*/}
        <Route path="/project" element={<MainLayout />}>
          <Route path=":projectid" element={<ProjectView />} />
        </Route>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
