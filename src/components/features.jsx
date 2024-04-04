'use client';

import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const swapImage = (index) => {
    if (isAnimating.current) return; // If animation is in progress, do not proceed

    isAnimating.current = true; // Set animation flag to true
    gsap.to('.image', { display: 'none', duration: 0});
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
    <section>
      <h1 className='mb-6 text-4xl text-center'>Features</h1>

      <article className='flex gap-10 justify-center w-full'>
        <ul className='flex flex-col gap-10 justify-evenly'>
          <li className='cursor-pointer'>
            <Image
              src={'/Random-1822.jpg'}
              alt='asd'
              width={50}
              height={50}
              onClick={() => swapImage(0)}
            />
          </li>
          <li className='cursor-pointer'>
            <Image
              src={'/Random-1837.jpg'}
              alt='asd'
              width={50}
              height={50}
              onClick={() => swapImage(1)}
            />
          </li>
          <li className='cursor-pointer'>
            <Image
              src={'/Random-1822.jpg'}
              alt='asd'
              width={50}
              height={50}
              onClick={() => swapImage(2)}
            />
          </li>
          <li className='cursor-pointer'>
            <Image
              src={'/Random-1837.jpg'}
              alt='asd'
              width={50}
              height={50}
              onClick={() => swapImage(3)}
            />
          </li>
        </ul>

        <ul>
          <li className='flex image' id='image-0'>
            <Image
              src='/Random-1822.jpg'
              alt='Random'
              width={500}
              height={500}
            />
            <p className='self-center text-center max-w-96'>
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
            <p className='self-center text-center max-w-96'>
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
            <p className='self-center text-center max-w-96'>
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
            <p className='self-center text-center max-w-96'>
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
