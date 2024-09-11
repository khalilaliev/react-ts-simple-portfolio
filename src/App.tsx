import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
// import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-2xl my-0 mx-auto mt-5 container pt-20 h-80vh-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
