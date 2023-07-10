import './Hero.css';
import heroGrid from '../assets/hero-img.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__img">
        <img src={heroGrid} alt="gallery" />
      </div>
      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__text-lead">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
