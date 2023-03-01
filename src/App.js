import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  document.title = "DP Events";
  return (
    <>
      <Header />
      <body className="bg-light-subtle bg-gradient">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </body>
      <Footer />
    </>
  );
}

export default App;
