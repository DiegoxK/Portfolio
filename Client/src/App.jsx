import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "./Layouts/MainLayout";
import Login from "./views/Login";
import Error404 from "./views/Error404";

// Views
import HomeInfo from "./components/Home/HomeInfo";
import About from "./views/About";
import MyBlog from "./views/MyBlog";
import Projects from "./views/Projects";
import BlogEntry from "./views/BlogEntry";
import BlogLayout from "./Layouts/BlogLayout";

// Main Router
function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomeInfo />} />
          <Route path="about" element={<About />} />
          <Route path="myblog" element={<MyBlog />} />
          <Route path="projects" element={<Projects />} />
        </Route>

        {/* Blog Page */}
        <Route path="/posts" element={<BlogLayout />}>
          <Route path="myblog/:postid" element={<BlogEntry />} />
        </Route>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Register */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
