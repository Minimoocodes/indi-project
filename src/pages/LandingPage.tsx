import { useRef } from "react";
import Slider from "../components/Slider";
import FirstSection from "../components/FirstSection";
import Footer from "../components/Footer";
import { TwistContextProvider } from "../contexts/LandingPageProvider";

const LandingPage = () => {
  const secondSection = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <TwistContextProvider>
        <FirstSection secondSection={secondSection} />
        <Slider secondSection={secondSection} />
        <Footer />
      </TwistContextProvider>
    </div>
  );
};

export default LandingPage;
