import Cat from "../assets/portada.png";
function About() {
  return (
    <div className="about-section">
      <img src={Cat} alt="" className="about-img" />
      <div className="about-text">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit
          a quaerat officiis accusamus magni praesentium voluptas, libero,
          molestiae quibusdam, suscipit incidunt! Accusamus obcaecati enim
          quasi? Praesentium odio vitae voluptates? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Libero pariatur eius laudantium dolore
          repellendus, quos consequatur facilis adipisci maxime inventore harum
          quis sapiente rerum nesciunt voluptatibus tempora dignissimos
          molestiae esse. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Obcaecati, non natus placeat laborum itaque ipsum culpa aliquid
          repudiandae deleniti vitae ut facere! Saepe at aliquam harum, iusto
          optio voluptas tempore!
        </p>
      </div>
    </div>
  );
}

export default About;
