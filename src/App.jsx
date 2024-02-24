import Header from "./components/Header";
import Section from "./components/Section";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Section />
      </div>
      <Footer />
    </>
  );
}

export default App;
