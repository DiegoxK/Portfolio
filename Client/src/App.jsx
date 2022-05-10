import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <route.component routes={route.routes} {...props} />
            )}
          />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
