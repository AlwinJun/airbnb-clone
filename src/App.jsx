import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
import zafares from './assets/zafares.png';

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Card
        img={zafares}
        imgAlt="swimmer"
        rate="5.0"
        count={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        amount={136}
      />
    </>
  );
}

export default App;

