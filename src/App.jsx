import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
function App() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
