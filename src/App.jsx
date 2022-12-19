import Layout from "./components/Layout/Layout";
import "./App.css";
import HomePage from "./page/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
