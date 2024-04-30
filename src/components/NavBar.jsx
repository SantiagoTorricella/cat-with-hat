import catLogo from "../assets/cat-logo.png";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-header">
        <img src={catLogo} alt="Page logo" className="nav-bar-logo" />
        <h3>Cat With Hat</h3>
      </div>
      <div className="nav-bar-menu">
        <div>Home</div>
        <div>About</div>
        <div>How to buy</div>
        <div>Roadmap</div>
      </div>
      <button>Buy Now</button>
    </div>
  );
}

export default NavBar;
