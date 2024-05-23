import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles/header.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About_me";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;