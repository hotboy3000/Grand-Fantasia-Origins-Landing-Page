import Image from 'next/image';
import '../css/navbar.css';

export default function NewsCard({ date, title, image, description }) {
  return (
    <section className='w-full flex-col max-w-[400] flex border-8 border-white bg-white'>
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className='self-center w-full'
      />
      <div className='flex flex-col justify-between h-full'>
        <div>
          <h1 className='py-2 text-3xl font-bold'>{title}</h1>
          <p>{description}</p>
        </div>
        <span className='px-1 mt-1 text-white date text-md bg-navbar'>{date}</span>
      </div>
    </section>
  );
}
