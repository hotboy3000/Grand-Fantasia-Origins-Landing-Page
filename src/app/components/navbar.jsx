import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <section className='flex mx-5 my-2'>
      <ul className='flex justify-between items-center w-full text-2xl'>
        <Link href='#' className='px-4 py-3 rounded-full shadow-lg backdrop-blur-sm bg-blue-500/50 shadow-white/50'><li>Home</li></Link>
        <Link href='#' className='px-4 py-3 rounded-full shadow-lg backdrop-blur-sm bg-blue-500/50 shadow-white/50'><li>News</li></Link>
        <Link href='#' className='px-4 py-3 rounded-full shadow-lg backdrop-blur-sm bg-blue-500/50 shadow-white/50'><li>Classes</li></Link>
        <Link href='#' className='px-4 py-3 rounded-full shadow-lg backdrop-blur-sm bg-blue-500/50 shadow-white/50'><li>Features</li></Link>
        <Link href='#'><li>
          <Image
            src='/Random-1818.jpg'
            alt='Logo'
            width={100}
            height={24}
            priority
            className='rounded-full shadow-lg backdrop-blur-sm bg-black/50 shadow-black/50'
          />
        </li></Link>
        <Link href='#' className='px-4 py-3 rounded-full shadow-lg backdrop-blur-sm bg-blue-500/50 shadow-white/50'><li>Language</li></Link>
        <Link href='#' className='px-4 py-3 rounded-full shadow-lg backdrop-blur-sm bg-blue-500/50 shadow-white/50'><li>Login</li></Link>
        <Link href='#' className='px-4 py-3 rounded-full shadow-lg backdrop-blur-sm bg-blue-500/50 shadow-white/50'><li>Register</li></Link>
        <Link href='#' className='px-4 py-3 rounded-full shadow-lg backdrop-blur-sm bg-blue-500/50 shadow-white/50'><li>Download</li></Link>
      </ul>
    </section>
  );
}
