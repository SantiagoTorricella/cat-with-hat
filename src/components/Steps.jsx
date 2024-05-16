function Steps({ title, text, img }) {
  return (
    <div className="step-container">
      <img src={img} alt="" className="home-img" />
      <div className="step-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Steps;
