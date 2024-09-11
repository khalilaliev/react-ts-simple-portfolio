import Header from "./components/Header/Header";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-xl my-0 mx-auto mt-5">
        <About />
      </main>
    </>
  );
}

export default App;
