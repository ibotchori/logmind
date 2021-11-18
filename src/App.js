import EventsChart from "./components/EventsChart/EventsChart";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent/MainContent";
import Search from "./components/Search/Search";
import { useDispatch } from "react-redux";
import { getDataAction } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  // Dummy data
  const data = [
    {
      name: "04 Nov",
      time: "2020-11-04 06:25:01",
      Count: 44000,
      priority: "high",
      Severity: 24000,
    },
    {
      name: "03 Nov",
      time: "2020-11-03 06:25:01",
      Count: 24000,
      priority: "medium",
      Severity: 15000,
    },
    {
      name: "02 Nov",
      time: "2020-11-02 06:25:01",
      Count: 34000,
      priority: "low",
      Severity: 10000,
    },
    {
      name: "01 Nov",
      time: "2020-11-01 06:25:01",
      Count: 14000,
      priority: "high",
      Severity: 20000,
    },
    {
      name: "04 Oct",
      time: "2020-10-04 06:25:01",
      Count: 4000,
      priority: "low",
      Severity: 23000,
    },
    {
      name: "04 Oct",
      time: "2020-10-04 06:25:01",
      Count: 14000,
      priority: "low",
      Severity: 34000,
    },
    {
      name: "04 Oct",
      time: "2020-10-04 06:25:01",
      Count: 2000,
      priority: "high",
      Severity: 15000,
    },
    {
      name: "04 Oct",
      time: "2020-10-04 06:25:01",
      Count: 3000,
      priority: "high",
      Severity: 25000,
    },
    {
      name: "04 Oct",
      time: "2020-10-04 06:25:01",
      Count: 4000,
      priority: "high",
      Severity: 35000,
    },
  ];


  // Send dummy data to redux
  dispatch(getDataAction(data));

  return (
    <div>
      <Layout>
        <Search />
        <EventsChart/>
        <MainContent />
      </Layout>
    </div>
  );
}

export default App;
