import MainChart from "./components/Chart/MainChart";
import Layout from "./components/Layout";
import Search from "./components/Search/Search";

function App() {

  return (
    <div>
      <Layout>
        <Search/>
        <MainChart/>
      </Layout>
    </div>
  );
}

export default App;
