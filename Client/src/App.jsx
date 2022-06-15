import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// Layouts
import MainLayout from "./Layouts/MainLayout";
import BasicLayout from "./Layouts/BasicLayout";
import Login from "./views/Login";
import Error404 from "./views/Error404";

// Views
import HomeInfo from "./components/Home/HomeInfo";
import HomeInfoEdit from "./components/Home/HomeInfoEdit";
import About from "./views/About";
import AboutEdition from "./views/Edition/AboutEdition";
import MyBlog from "./views/MyBlog";
import MyBlogEdition from "./views/Edition/MyBlogEdition";
import Projects from "./views/Projects";
import ProjectsEdition from "./views/Edition/ProjectsEdition";
import InfoEntryBlog from "./views/InfoEntryBlog";
import InfoEntryBlogEdition from "./views/Edition/InfoEntryBlogEdition";

// Context
import { UserContext } from "./context/UserContex";

// Api
import { getUser } from "../api/apiCalls";
import InfoEntryProject from "./views/InfoEntryProject";
import InfoEntryProjectEdition from "./views/Edition/InfoEntryProjectEdition";

// Main Router
function App() {
  const [userState, setUserState] = useState();

  // Edit State
  useEffect(() => {
    getUser()
      .then(() => {
        setUserState(true);
      })
      .catch(() => {
        setUserState(false);
        // console.clear();
      });
  }, []);

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
            <Route
              path="about"
              element={userState ? <AboutEdition /> : <About />}
            />
            <Route
              path="myblog"
              element={userState ? <MyBlogEdition /> : <MyBlog />}
            />
            <Route
              path="projects"
              element={userState ? <ProjectsEdition /> : <Projects />}
            />
          </Route>

          {/* Project Page*/}
          <Route path="/project" element={<BasicLayout />}>
            <Route
              path=":projectid"
              element={
                userState ? <InfoEntryProjectEdition /> : <InfoEntryProject />
              }
            />
          </Route>

          {/* Blog Page */}
          <Route path="/posts/" element={<BasicLayout />}>
            <Route
              path=":postid"
              element={userState ? <InfoEntryBlogEdition /> : <InfoEntryBlog />}
            />
          </Route>

          {/* Login */}
          {userState ? "" : <Route path="/login" element={<Login />} />}

          {/* 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
