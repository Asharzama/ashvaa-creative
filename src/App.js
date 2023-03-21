import AboutSection from "./components/AboutSection";
import DetailsSection from "./components/DetailsSection";
import FirstHeader from "./components/FirstHeader";
import Footer from "./components/Footer";
import Products from "./components/Products";
import SecondHeader from "./components/SecondHeader";
import UpperBody from "./components/UpperBody";

function App() {
  return (
    <div className="App">
      <FirstHeader />
      <SecondHeader />
      <UpperBody />
      <AboutSection />
      <DetailsSection />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
