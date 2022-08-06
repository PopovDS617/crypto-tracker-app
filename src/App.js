import Layout from "./layouts/Layout";
import Tracker from "./components/Tracker/Tracker";
import GlobalMarketList from "./components/GlobalMarket/GlobalMarketList";

function App() {
  return (
    <Layout>
      <div>hello</div>
      <GlobalMarketList />
      <Tracker />
    </Layout>
  );
}

export default App;
