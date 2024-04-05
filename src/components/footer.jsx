'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../css/navbar.css';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    toggleDropdown();
    // add logic here to change the language
  };

  return (
    <footer className='flex flex-col w-full bg-white max-w-[1250px]'>
      <section className='flex justify-evenly p-4 bg-origins'>
        <Link href={'#'} className='p-2 text-2xl text-center Button'>
          Register
        </Link>
        <Link href={'#'} className='p-2 text-2xl text-center Button'>
          Download
        </Link>
      </section>
      <section className='flex justify-center'>
        <ul className='flex justify-evenly items-center w-full'>
          <li>
            <Link href={'#'}>
              <Image src={'/logo.jpg'} alt='Random' width={100} height={100} />
            </Link>
          </li>
          <li>© 2024 Grand Fantasia Origins - All rights reserved</li>
          <ul className='flex gap-5'>
            <li>
              <Link href={'#'}>
                <Image
                  src={'/discord.svg'}
                  alt='discord'
                  width={40}
                  height={40}
                  title='discord'
                />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <Image
                  src={'/instagram.svg'}
                  alt='instagram'
                  width={40}
                  height={40}
                  title='instagram'
                />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <Image
                  src={'/youtube.svg'}
                  alt='twitter'
                  width={40}
                  height={40}
                  title='youtube'
                />
              </Link>
            </li>
          </ul>
          <li className='relative' ref={dropdownRef}>
            <button onClick={toggleDropdown} className='flex gap-2 navbarButton'>
              <Image
                src={'/globe.svg'}
                alt='globe'
                width={20}
                height={20}
                title='globe'
              />{' '}
              Language
            </button>
            {isOpen && (
              <ul className='absolute right-0 -top-[8rem] z-10 bg-white rounded-md border shadow-md navbarDropdown'>
                <li
                  onClick={() => handleLanguageChange('English')}
                  className='p-2 text-center rounded-t-lg cursor-pointer hover:bg-navbar hover:text-button'
                >
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange('Spanish')}
                  className='p-2 text-center cursor-pointer hover:bg-navbar hover:text-button'
                >
                  Spanish
                </li>
                <li
                  onClick={() => handleLanguageChange('French')}
                  className='p-2 text-center rounded-b-lg cursor-pointer hover:bg-navbar hover:text-button'
                >
                  Portuguese
                </li>
              </ul>
            )}
          </li>
        </ul>
      </section>
    </footer>
  );
}
