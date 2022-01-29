import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Companies from './components/Companies';
import GP3 from './components/GP3';
import Feature from './components/Feature';
import Cta from './components/Cta';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col '>
      <Navbar />
      <Hero />
      <Companies />
      <GP3 />
      <Feature />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
