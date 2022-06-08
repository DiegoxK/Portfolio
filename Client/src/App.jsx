import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Layouts
import MainLayout from "./Layouts/MainLayout";
import Login from "./views/Login";
import Error404 from "./views/Error404";

// Views
import HomeInfo from "./components/Home/HomeInfo";
import HomeInfoEdit from "./components/Home/HomeInfoEdit";
import About from "./views/About";
import MyBlog from "./views/MyBlog";
import Projects from "./views/Projects";
import InfoEntry from "./views/InfoEntry";
import BasicLayout from "./Layouts/BasicLayout";

// Context
import { UserContext } from "./context/UserContex";

// Main Router
function App() {
  const [userState, setUserState] = useState(false);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <Router>
        <Routes>
          {/* Main Page */}
          <Route path="/" element={<MainLayout />}>
            <Route
              path=""
              element={userState ? <HomeInfoEdit /> : <HomeInfo />}
            />
            <Route path="about" element={<About />} />
            <Route path="myblog" element={<MyBlog />} />
            <Route path="projects" element={<Projects />} />
          </Route>

          {/* Project Page*/}
          <Route path="/project" element={<BasicLayout />}>
            <Route path=":projectid" element={<InfoEntry />} />
          </Route>

          {/* Blog Page */}
          <Route path="/posts" element={<BasicLayout />}>
            <Route path=":postid" element={<InfoEntry />} />
          </Route>

          {/* Login */}
          <Route path="/login" element={userState ? "" : <Login />} />

          {/* 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
