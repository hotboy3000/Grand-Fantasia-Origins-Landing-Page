import Image from 'next/image';
import Link from 'next/link';

export default function NewsCard({ link, title, image, description }) {
  return (
    <section className='w-full flex-col max-w-[400] flex px-2'>
      <Link href={link || '#'} className='flex flex-col'>
        <h1 className='pb-2 text-3xl text-center'>{title}</h1>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className='self-center w-full'
        />
      </Link>
      <p>{description}</p>
    </section>
  );
}
