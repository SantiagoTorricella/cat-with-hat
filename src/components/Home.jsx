import Cat from "../assets/portada.png";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import BinanceLogo from "../assets/binance-logo.svg";
import ExchangerContainer from "./ExchangerContainer";

function Home() {
  return (
    <div className="home-page">
      <div className="home-description">
        <div className="home-description-left">
          <div className="home-main-text">
            <h1>Cat With Hat</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse
            sint earum ipsum aut aspernatur reiciendis laudantium a modi,
            tenetur vitae, ullam voluptatem repellat dolorem accusamus voluptas
            aliquid? Iste, porro!
          </div>
          <div className="home-social-links">
            <img src={Twitter} alt="Twitter Icon" />
            <img src={Instagram} alt="Instagram Icon" />
          </div>
        </div>
        <img src={Cat} alt="Cat with hat image" className="home-img" />
      </div>
      <div className="home-exchanger-links">
        <ExchangerContainer
          name="Binance"
          img={BinanceLogo}
        ></ExchangerContainer>
        <ExchangerContainer
          name="Binance"
          img={BinanceLogo}
        ></ExchangerContainer>
        <ExchangerContainer
          name="Binance"
          img={BinanceLogo}
        ></ExchangerContainer>
      </div>
    </div>
  );
}
export default Home;
