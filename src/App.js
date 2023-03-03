import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Weddings from "./pages/Weddings/Weddings";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  document.title = "DP Events";
  return (
    <>
      <Header />
      <body className=" body ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/weddings&events" element={<Weddings />} />
          </Routes>
        </BrowserRouter>
      </body>
      <Footer />
    </>
  );
}

export default App;
