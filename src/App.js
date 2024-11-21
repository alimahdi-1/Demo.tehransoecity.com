import "./App.css";
import Daraje2 from "./components/Daraje2-component";
import Navbar from "./components/Header/Header";
import Page from "./components/Page";
import SearchBox from "./components/Header/SearchBox/SearchBar";
import Footer from "./components/Footer";
import Screen from "./components/width/Width";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
