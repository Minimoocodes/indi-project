import Mix from "../components/Mix";
import MixResult from "../components/MixResult";
import { MixProvider } from "../consts/MixProvider";
import MixGrid from "../components/MixGrid";

const FunTwistPage = () => {
  return (
    <>
      <MixProvider>
        <MixGrid />
        <Mix />
        <MixResult />
      </MixProvider>
    </>
  );
};

export default FunTwistPage;
