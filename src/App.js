import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  document.title = "DP Events";
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
