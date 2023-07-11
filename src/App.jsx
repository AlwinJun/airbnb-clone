import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  console.log(data);
  const cards = data.map((dataProps) => {
    const {
      id,
      title,
      description,
      amount,
      coverImg,
      imgAlt,
      country,
      openSlots,
      stats = { rate, price },
    } = dataProps;

    return (
      <Card
        img={coverImg}
        imgAlt={imgAlt}
        rate={stats.rate}
        count={stats.price}
        country={country}
        title={title}
        amount={amount}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      {cards}
    </>
  );
}

export default App;

