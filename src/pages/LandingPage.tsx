import { useRef } from "react";
import FirstSection from "../components/FirstSection";
import Slider from "../components/Slider";
import { LandingPageContext } from "../consts/contexts";
import Footer from "../components/Footer";

const LandingPage = () => {
  const secondSection = useRef<HTMLDivElement>();

  return (
    <div>
      <LandingPageContext.Provider value={{ secondSection }}>
        <FirstSection />
        <Slider />
        <Footer />
      </LandingPageContext.Provider>
    </div>
  );
};

export default LandingPage;
