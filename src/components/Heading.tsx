import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
// import MASHISSO from "../assets/MASHISSO.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
// useGSAP(() => {
//   ScrollTrigger.create({
//     trigger: "#nav",
//     start: "top top",
//     end: "bottom top",
//     pin: "#logo-image",
//   });
// }, {});

const Heading = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleNav = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  const handleActiveMenu = (menu: string | null) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <div id="nav">
        {/* <img id="logo-image" src={MASHISSO} className="p-5 w-full" /> */}
        <div className="hidden lg:flex justify-between items-center p-4 h-[8vh] fixed top-0 w-full z-10 bg-white">
          <ul className="flex gap-4 r-semibold items-center ">
            <Link to="/">
              <li
                onClick={() => handleActiveMenu(null)}
                className="logo-primary text-2xl"
              >
                MASHISSO
              </li>
            </Link>
            <Link to="/what-to-eat">
              <li
                onClick={() => handleActiveMenu("what-to-eat")}
                className={
                  activeMenu === "what-to-eat" ? "underline" : "no-underline"
                }
              >
                What to eat
              </li>
            </Link>
            <Link to="/my-recipes">
              <li
                onClick={() => handleActiveMenu("my-recipes")}
                className={
                  activeMenu === "my-recipes" ? "underline" : "no-underline"
                }
              >
                My recipes
              </li>
            </Link>
            <Link to="/fun-twist">
              <li
                onClick={() => handleActiveMenu("add-a-fun-twist")}
                className={
                  activeMenu === "add-a-fun-twist"
                    ? "underline"
                    : "no-underline"
                }
              >
                Add a fun twist
              </li>
            </Link>
            <Link to="/log-recipes">
              <li
                onClick={() => handleActiveMenu("log-my-recipes")}
                className={
                  activeMenu === "log-my-recipes" ? "underline" : "no-underline"
                }
              >
                Log my recipe
              </li>
            </Link>
          </ul>
          <div className="flex items-center ml-16 gap-5 r-semibold">
            <AiOutlineSearch />
            <p>Log in</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-4 items-center lg:hidden">
        <Link to="/">
          <h1 className="logo-primary text-2xl">MASHISSO</h1>
        </Link>
        <div onClick={toggleNav}>
          {showNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={
          showNav
            ? "fixed right-0 w-[60vw] h-full bg-[#5F5A57] ease-in-out duration-500 z-10"
            : "fixed top-0 right-[-100%]"
        }
      >
        <ul className="uppercase r-semibold text-white p-5 text-xl text-right">
          <li className="mb-16">Menu</li>
          <Link to="/what-to-eat">
            <li className="mb-16" onClick={() => setShowNav(false)}>
              What to eat
            </li>
          </Link>
          <Link to="/my-recipes">
            <li className="mb-16">My recipes</li>
          </Link>
          <Link to="/fun-twist">
            <li className="mb-16">Add a fun twist</li>
          </Link>
          <Link to="/log-recipes">
            <li className="mb-16">Log my recipe</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Heading;
