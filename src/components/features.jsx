'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import '../css/features.css';

export default function Features() {
  const images = [
    '/Random-1822.jpg',
    '/Random-1822.jpg',
    '/Random-1822.jpg',
    '/Random-1822.jpg'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const swapImage = (index) => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    gsap.to('.image', {
      display: 'none',
      duration: 0,
      opacity: 0,
      ease: 'power2.in'
    });
    setCurrentIndex(index);
    gsap.to(`#image-${index}`, {
      display: 'flex',
      duration: 1,
      opacity: 1,
      ease: 'back.inOut',
      onComplete: () => {
        isAnimating.current = false;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      swapImage(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <section className='px-4 mb-9 h-full'>
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        FEATURES
      </h1>

      <article className='flex gap-10 justify-center py-5 mt-9 w-full bg-white'>
        {/* Buttons */}
        <ul className='flex flex-col justify-between'>
          {images.map((image, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                currentIndex === index ? '' : 'gray'
              }`}
              onClick={() => swapImage(index)}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={70}
                height={70}
                className='border-8 border-button'
              />
            </li>
          ))}
        </ul>

        {/* Images and Text */}
        <ul className='p-2 h-[393px] bg-button'>
          {images.map((image, index) => (
            <li
              key={index}
              className={`image ${currentIndex === index ? 'flex' : 'hidden'}`}
              id={`image-${index}`}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
              />
              <p className='p-4 max-w-96 bg-button'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eius corrupti neque quasi hic aliquid alias ut,
                obcaecati esse enim?
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
