import Steps from "./Steps";
import Gotaca from "../assets/portada.png";

function HowToBuy() {
  let firstHeader = "Hola este es mi primer header jejejejejej";
  let firstText =
    "Hola este es la primera experiencia haciendo un step jejejejejjejejeje";
  return (
    <div className="how-to-buy">
      <h1>How to buy</h1>
      <Steps text={firstText} title={firstHeader} img={Gotaca}></Steps>
      <Steps text={firstText} title={firstHeader} img={Gotaca}></Steps>
      <Steps text={firstText} title={firstHeader} img={Gotaca}></Steps>
    </div>
  );
}

export default HowToBuy;
