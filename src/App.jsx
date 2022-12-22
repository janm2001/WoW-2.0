import Layout from "./components/Layout/Layout";
import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import ExpansionsPage from "./page/ExpansionsPage/ExpansionsPage";
import ClassesPage from "./page/ClassesPage/ClassesPage";
import NewsPage from "./page/NewsPage/NewsPage";
import {Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Layout>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/expansions" element={<ExpansionsPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
