import { Outlet } from "react-router-dom";
import { TwistContextProvider } from "../contexts/LandingPageProvider";
import Heading from "./Heading";

const Layout = () => {
  return (
    <>
      <Heading />
      <div className={"mt-[1vh] lg:mt-[8vh]"}>
        <TwistContextProvider>
          <Outlet />
        </TwistContextProvider>
      </div>
    </>
  );
};

export default Layout;
