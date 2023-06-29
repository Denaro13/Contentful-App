import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            similique pariatur consequatur nulla magni. Odio voluptatem natus
            corporis ipsum iure dolorum error distinctio tempore blanditiis,
            vitae minima ipsam. Cum, obcaecati.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
