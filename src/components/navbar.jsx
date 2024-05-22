import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import '../css/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation();

  gsap.registerPlugin(useGSAP);
  const navRef = useRef();
  const setIsOpenFunc = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        gsap.fromTo(
          navRef.current,
          {
            opacity: 1,
            y: 7.8
          },
          {
            opacity: 0,
            y: 300,
            duration: 1,
            ease: 'power3',
            onComplete: setIsOpenFunc
          }
        );
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    gsap.fromTo(
      navRef.current,
      {
        y: -30,
        opacity: 0.2,
        duration: 1
      },
      {
        y: 7.8,
        opacity: 1,
        zIndex: 100,
        ease: 'power3'
      }
    );
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    toggleDropdown();
    i18n.changeLanguage(language);
  };

  return (
    <section className='flex flex-col w-full max-w-[1250px]'>
      <ul className='flex gap-2 justify-end py-2 w-full'>
        <a href={'#'} className='navbarButton'>
          <li>{t('Register')}</li>
        </a>
        <a href={'#'} className='navbarButton'>
          <li>{t('Login')}</li>
        </a>
        <li className='relative' ref={dropdownRef}>
          <button onClick={toggleDropdown} className='flex gap-2 navbarButton'>
            <img
              src='/logo.jpg'
              alt='globe'
              width={20}
              height={20}
              title='globe'
            />
            {t('Language')}
          </button>

          {/* Dropdown */}
          <div ref={navRef} className='relative'>
            {isOpen && (
              <ul className='absolute right-0 z-40 bg-white rounded-md border shadow-md navbarDropdown'>
                <li className='p-2 text-center rounded-t-lg cursor-pointer hover:bg-navbar hover:text-button'>
                  <button
                    disabled={i18n.resolvedLanguage === 'en'}
                    onClick={() => handleLanguageChange('en')}
                  >
                    {t('English')}
                  </button>
                </li>
                <li className='p-2 text-center cursor-pointer hover:bg-navbar hover:text-button'>
                  <button
                    disabled={i18n.resolvedLanguage === 'es'}
                    onClick={() => handleLanguageChange('es')}
                  >
                    {t('Spanish')}
                  </button>
                </li>
                <li className='p-2 text-center rounded-b-lg cursor-pointer hover:bg-navbar hover:text-button'>
                  <button
                    disabled={i18n.resolvedLanguage === 'pt'}
                    onClick={() => handleLanguageChange('pt')}
                  >
                    {t('Portuguese')}
                  </button>
                </li>
              </ul>
            )}
          </div>
        </li>
        {/* End Dropdown */}

        <a href={'#'} className='navbarButton'>
          <li>{t('Download')}</li>
        </a>
      </ul>

      {/* Second Navbar */}
      <ul className='flex gap-10 justify-between items-center navbarSecondary'>
        <a href={'/'}>
          <li>
            <img
              src={'/logo.jpg'}
              alt='logo'
              width={100}
              height={100}
              className='rounded-full'
            />
          </li>
        </a>
        <ul className='flex gap-10 justify-center w-full text-2xl'>
          <a href={'/'} className='hover:underline hover:drop-shadow-lg'>
            <li>{t('HomeNav')}</li>
          </a>
          <a href={'#news'} className='hover:underline hover:drop-shadow-lg'>
            <li>{t('NewsNav')}</li>
          </a>
          <a href={'#classes'} className='hover:underline hover:drop-shadow-lg'>
            <li>{t('ClassesNav')}</li>
          </a>
          <a
            href={'#features'}
            className='hover:underline hover:drop-shadow-lg'
          >
            <li>{t('FeaturesNav')}</li>
          </a>
          <ul className='flex gap-5 self-center'>
            <li>
              <a target='_blank' href={'https://discord.gg/SjVYmebK6P'}>
                <img
                  src={'/discord.svg'}
                  alt='discord'
                  width={30}
                  height={30}
                  title='discord'
                  className='icons'
                />
              </a>
            </li>
            <li>
              <a target='_blank' href={'#'}>
                <img
                  src={'/instagram.svg'}
                  alt='instagram'
                  width={30}
                  height={30}
                  title='instagram'
                  className='icons'
                />
              </a>
            </li>
            <li>
              <a target='_blank' href={'#'}>
                <img
                  src={'/youtube.svg'}
                  alt='twitter'
                  width={30}
                  height={30}
                  title='youtube'
                  className='icons'
                />
              </a>
            </li>
          </ul>
        </ul>
      </ul>
    </section>
  );
}
