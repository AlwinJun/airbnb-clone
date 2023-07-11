import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  const cards = data.map((dataProps) => {
    const {
      id,
      title,
      description,
      amount,
      coverImg,
      imgAlt,
      country,
      openSpots,
      meeting,
      stats = { rate, price },
    } = dataProps;

    return (
      <Card
        key={id}
        img={coverImg}
        imgAlt={imgAlt}
        rate={stats.rate}
        count={stats.price}
        meeting={meeting}
        country={country}
        title={title}
        amount={amount}
        isAvailable={openSpots}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-container">{cards}</section>
    </>
  );
}

export default App;

