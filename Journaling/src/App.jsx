import './index.css';
import Banner from './Components/Banner';
import PlannerContainer from './Components/PlannerContainer';
import DailyPlanner from './Components/DailyPlanner';

function App() {
  return <div className='mainPage'>
  <Banner/>
  <PlannerContainer/>
  <DailyPlanner/>
  </div>
}

export default App;
