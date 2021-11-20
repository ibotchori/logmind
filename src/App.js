import EventsChart from "./components/EventsChart/EventsChart";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent/MainContent";
import Search from "./components/Search/Search";
import { useDispatch } from "react-redux";
import { getDataAction } from "./redux/actions";
import { data } from "./data/data";

function App() {
  // Send data to redux
  const dispatch = useDispatch();
  dispatch(getDataAction(data));

  return (
    <div>
      <Layout>
        <Search />
        <EventsChart />
        <MainContent />
      </Layout>
    </div>
  );
}

export default App;
