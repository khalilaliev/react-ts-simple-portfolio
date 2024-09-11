import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-2xl my-0 mx-auto mt-5 container pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
