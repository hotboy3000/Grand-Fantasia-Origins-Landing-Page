'use client';

import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import '../css/features.css';
export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const swapImage = (index) => {
    if (isAnimating.current) return; // If animation is in progress, do not proceed

    isAnimating.current = true; // Set animation flag to true
    gsap.to('.image', { display: 'none', duration: 0 });
    gsap.to(`#image-${index}`, {
      display: 'flex',
      duration: 0,
      onComplete: () => {
        setCurrentIndex(index); // Update current index after animation completes
        isAnimating.current = false; // Reset animation flag
      }
    });
  };

  return (
    <section className='px-4 mb-9'>
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        FEATURES
      </h1>

      <article className='flex gap-10 justify-center py-5 mt-9 w-full bg-white'>
        <ul className='flex flex-col justify-between'>
          <li className={`cursor-pointer ${currentIndex === 0 ? '' : 'gray'}`}>
            <Image
              src={'/Random-1822.jpg'}
              alt='asd'
              width={70}
              height={70}
              onClick={() => swapImage(0)}
              className='border-8 border-button'
            />
          </li>
          <li className={`cursor-pointer ${currentIndex === 1 ? '' : 'gray'}`}>
            <Image
              src={'/Random-1837.jpg'}
              alt='asd'
              width={70}
              height={70}
              onClick={() => swapImage(1)}
              className='border-8 border-button'
            />
          </li>
          <li className={`cursor-pointer ${currentIndex === 2 ? '' : 'gray'}`}>
            <Image
              src={'/Random-1822.jpg'}
              alt='asd'
              width={70}
              height={70}
              onClick={() => swapImage(2)}
              className='border-8 border-button'
            />
          </li>
          <li className={`cursor-pointer ${currentIndex === 3 ? '' : 'gray'}`}>
            <Image
              src={'/Random-1837.jpg'}
              alt='asd'
              width={70}
              height={70}
              onClick={() => swapImage(3)}
              className='border-8 border-button'
            />
          </li>
        </ul>

        <ul className='p-2 bg-button'>
          <li className='flex image' id='image-0'>
            <Image
              src='/Random-1822.jpg'
              alt='Random'
              width={500}
              height={500}
            />
            <p className='p-4 max-w-96 bg-button'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              eius corrupti neque quasi hic aliquid alias ut, obcaecati esse
              enim?
            </p>
          </li>
          <li className='hidden image' id='image-1'>
            <Image
              src='/Random-1837.jpg'
              alt='Random'
              width={500}
              height={500}
            />
            <p className='p-4 max-w-96 bg-button'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              eius corrupti neque quasi hic aliquid alias ut, obcaecati esse
              enim?
            </p>
          </li>
          <li className='hidden image' id='image-2'>
            <Image
              src='/Random-1822.jpg'
              alt='Random'
              width={500}
              height={500}
            />
            <p className='p-4 max-w-96 bg-button'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              eius corrupti neque quasi hic aliquid alias ut, obcaecati esse
              enim?
            </p>
          </li>
          <li className='hidden image' id='image-3'>
            <Image
              src='/Random-1837.jpg'
              alt='Random'
              width={500}
              height={500}
            />
            <p className='p-4 max-w-96 bg-button'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              eius corrupti neque quasi hic aliquid alias ut, obcaecati esse
              enim?
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}
