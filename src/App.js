import EventsChart from "./components/Chart/EventsChart";
import Layout from "./components/Layout";
import  MainContent  from "./components/MainContent/MainContent";
import Search from "./components/Search/Search";

function App() {

  return (
    <div>
      <Layout>
        <Search/>
        <EventsChart/>
        <MainContent/>
      </Layout>
    </div>
  );
}

export default App;
