import "./index.css";
import Banner from "./Components/Banner";
import PlannerContainer from "./Components/PlannerContainer";
import DailyPlanner from "./Components/DailyPlanner";
import OverView from "./Components/OverView";

function App() {
  return (
    <div className="mainPage">
      <Banner />
      <PlannerContainer />
      <OverView />
    </div>
  );
}

export default App;
