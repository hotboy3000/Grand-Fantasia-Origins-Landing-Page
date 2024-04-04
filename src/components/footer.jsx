import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex flex-col my-4'>
      <section className='flex justify-evenly self-center w-full max-w-96'>
        <h2 className='text-2xl text-center'>Register</h2>
        <h2 className='text-2xl text-center'>Download</h2>
      </section>
      <section className='flex justify-center'>
        <ul className='flex justify-evenly items-center w-full'>
          <li>
            <Image
              src={'/Random-1818.jpg'}
              alt='Random'
              width={100}
              height={100}
            />
          </li>
          <li>Copyright stuff</li>
          <li>Social Media</li>
          <li>Language</li>
        </ul>
      </section>
    </footer>
  );
}
