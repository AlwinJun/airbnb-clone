import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // Passing props as an spread object
        {...item}
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

