import Navbar from './components/navbar';
import Home from './components/home';
import News from './components/news';
import Classes from './components/classes';
import Features from './components/features';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <main className='flex flex-col justify-center items-center bg-green'>
      <Navbar />
      <Home />
      <section className='flex flex-col w-full max-w-[1250px] border-8 border-white bg-background'>
        <News />
        <img
          src={'/divider-8557901.svg'}
          alt='divider'
          width={500}
          height={100}
          className='self-center'
        />
        <Classes />
        <img
          src={'/divider-8557901.svg'}
          alt='divider'
          width={500}
          height={100}
          className='self-center'
        />
        <Features />
      </section>
      <Footer />
    </main>
  );
}

export default App;
