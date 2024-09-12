import { useRef } from "react";
import { LandingPageContext } from "../contexts/contexts";
import Slider from "../components/Slider";
import FirstSection from "../components/FirstSection";
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
