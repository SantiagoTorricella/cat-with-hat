function ExchangerContainer({ name, img }) {
  return (
    <div className="exchanger-container">
      <img src={img} alt="" className="exchanger-logo" />
      <h2>{name}</h2>
    </div>
  );
}

export default ExchangerContainer;
