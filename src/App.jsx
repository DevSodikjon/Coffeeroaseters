import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Headers from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CreatPlan from "./components/crud/CreatPlan";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headers />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/crud" element={<CreatPlan />}></Route>
          </Routes>
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
