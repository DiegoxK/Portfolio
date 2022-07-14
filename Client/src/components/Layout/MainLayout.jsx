import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
