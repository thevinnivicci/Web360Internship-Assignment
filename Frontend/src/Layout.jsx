import Footer from "./components/Footer";
import Navcomponent from "./components/Navcomponent";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navcomponent />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
