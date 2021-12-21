import react from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

import {
  BrowserRouter as Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
