import EventsChart from "./components/Chart/EventsChart";
import Layout from "./components/Layout";
import Search from "./components/Search/Search";

function App() {

  return (
    <div>
      <Layout>
        <Search/>
        <EventsChart/>
      </Layout>
    </div>
  );
}

export default App;
