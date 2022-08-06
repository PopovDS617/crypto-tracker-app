import Layout from "./layouts/Layout";
import TrackerList from "./components/Tracker/TrackerList";
import GlobalMarketList from "./components/GlobalMarket/GlobalMarketList";

function App() {
  return (
    <Layout>
      <GlobalMarketList />
      <TrackerList />
    </Layout>
  );
}

export default App;
