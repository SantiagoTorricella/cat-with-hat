import Cat from "../assets/hat-cat.webp";
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
          <div className="home-social-links"></div>
        </div>
        <img src={Cat} alt="Cat with hat image" className="home-img" />
      </div>
      <div className="home-exchanger-links"></div>
    </div>
  );
}
export default Home;
