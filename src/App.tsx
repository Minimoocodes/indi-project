import "./App.css";
import Heading from "./components/Heading";
import FirstSection from "./components/FirstSection";
import Slider from "./components/Slider";
import { recipes } from "./data";
import RecipeCard from "./components/common/RecipeCard";

function App() {
  return (
    <div className="max-w-[1240px]">
      <Heading />
      <FirstSection />
      <div className="flex bg-[salmon] slider">
        {recipes.map((r) => (
          <RecipeCard variant="random" />
        ))}
      </div>
      {/* <Slider /> */}
    </div>
  );
}

export default App;
