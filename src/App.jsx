import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import "./App.css";
function App() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <HowToBuy></HowToBuy>
    </div>
  );
}

export default App;
