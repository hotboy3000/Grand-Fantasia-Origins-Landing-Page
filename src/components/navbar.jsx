'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '@/app/i18n';
import '../css/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { t } = useTranslation();

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
    i18n.changeLanguage(language);
    console.log(language);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <section className='flex flex-col w-full max-w-[1250px]'>
        <ul className='flex gap-2 justify-end py-2 pl-2 w-full'>
          <Link href={'#'} className='navbarButton'>
            <li>{t('Register')}</li>
          </Link>
          <Link href={'#'} className='navbarButton'>
            <li>{t('Login')}</li>
          </Link>
          <li className='relative' ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className='flex gap-2 navbarButton'
            >
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
              <ul className='absolute right-0 z-10 mt-2 bg-white rounded-md border shadow-md navbarDropdown'>
                <li
                  onClick={() => handleLanguageChange('en')}
                  className='p-2 text-center rounded-t-lg cursor-pointer hover:bg-navbar hover:text-button'
                >
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange('es')}
                  className='p-2 text-center cursor-pointer hover:bg-navbar hover:text-button'
                >
                  Spanish
                </li>
                <li
                  onClick={() => handleLanguageChange('pt')}
                  className='p-2 text-center rounded-b-lg cursor-pointer hover:bg-navbar hover:text-button'
                >
                  Portuguese
                </li>
              </ul>
            )}
          </li>
          <Link href={'#'} className='navbarButton'>
            <li>Download Now</li>
          </Link>
        </ul>

        <ul className='flex gap-10 justify-between items-center navbarSecondary'>
          <Link href={'#'}>
            <li>
              <Image
                src={'/logo.jpg'}
                alt='logo'
                width={100}
                height={100}
                className='rounded-full'
              />
            </li>
          </Link>
          <ul className='flex gap-10 justify-center w-full text-2xl'>
            <Link href={'#'} className='hover:underline hover:drop-shadow-lg'>
              <li>Home</li>
            </Link>
            <Link href={'#'} className='hover:underline hover:drop-shadow-lg'>
              <li>News</li>
            </Link>
            <Link href={'#'} className='hover:underline hover:drop-shadow-lg'>
              <li>Classes</li>
            </Link>
            <Link href={'#'} className='hover:underline hover:drop-shadow-lg'>
              <li>Features</li>
            </Link>
            <ul className='flex gap-5 self-center'>
              <li>
                <Link target='_blank' href={'https://discord.gg/SjVYmebK6P'}>
                  <Image
                    src={'/discord.svg'}
                    alt='discord'
                    width={30}
                    height={30}
                    title='discord'
                  />
                </Link>
              </li>
              <li>
                <Link target='_blank' href={'#'}>
                  <Image
                    src={'/instagram.svg'}
                    alt='instagram'
                    width={30}
                    height={30}
                    title='instagram'
                  />
                </Link>
              </li>
              <li>
                <Link target='_blank' href={'#'}>
                  <Image
                    src={'/youtube.svg'}
                    alt='twitter'
                    width={30}
                    height={30}
                    title='youtube'
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </ul>
      </section>
    </I18nextProvider>
  );
}
