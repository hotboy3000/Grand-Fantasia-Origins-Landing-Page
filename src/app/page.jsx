import Navbar from '../components/navbar';
import Home from '../components/home';
import News from '../components/news';
import Classes from '../components/classes';
import Features from '../components/features';
import Footer from '../components/footer';
import Image from 'next/image';

export default function Main() {
  return (
    <main className='flex flex-col justify-center items-center bg-green'>
      <Navbar />
      <Home />
      <section className='flex flex-col w-full max-w-[1250px] border-8 border-white bg-background'>
        <News />
        <Image
          src={'/divider-8557901.svg'}
          alt='divider'
          width={500}
          height={100}
          className='self-center mb-5'
        />
        <Classes />
        <Image
          src={'/divider-8557901.svg'}
          alt='divider'
          width={500}
          height={100}
          className='self-center m-5'
        />
        <Features />
      </section>
      <Footer />
    </main>
  );
}
