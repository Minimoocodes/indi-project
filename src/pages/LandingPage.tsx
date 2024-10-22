import { useRef } from "react";
import Slider from "../components/Slider";
import FirstSection from "../components/FirstSection";
import Footer from "../components/Footer";
import { TwistContextProvider } from "../contexts/LandingPageProvider";
import Roulette from "../components/Roulette";

const LandingPage = () => {
  const secondSection = useRef<HTMLDivElement>();

  return (
    <div>
      <TwistContextProvider>
        <FirstSection secondSection={secondSection} />
        <Slider secondSection={secondSection} />
        <Roulette />
        <Footer />
      </TwistContextProvider>
    </div>
  );
};

export default LandingPage;
