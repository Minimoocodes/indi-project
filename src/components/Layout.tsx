import { Outlet } from "react-router-dom";
import Heading from "./Heading";

const Layout = () => {
  return (
    <>
      <Heading />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
