import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import '../css/navbar.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='flex flex-col w-full bg-white max-w-[1250px]'>
      <section className='flex justify-evenly p-4 bg-origins'>
        <Link href={'/register'} className='p-2 text-2xl text-center Button'>
          {t('Register')}
        </Link>
        <a href={'#'} className='p-2 text-2xl text-center Button'>
          {t('Download')}
        </a>
      </section>
      <section className='flex justify-center'>
        <ul className='flex justify-evenly items-center w-full'>
          <li>
            <a href={'/'}>
              <img src={'/logo.jpg'} alt='Random' width={100} height={100} />
            </a>
          </li>
          <li>{t('Copyright')}</li>
          <ul className='flex gap-5'>
            <li>
              <a target='_blank' href={'https://discord.gg/DUpgWc9Gg5'}>
                <img
                  src={'/discord.svg'}
                  alt='discord'
                  width={40}
                  height={40}
                  title='discord'
                  className='icons'
                />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href={'https://www.instagram.com/grand.fantasia.awakening/'}
              >
                <img
                  src={'/instagram.svg'}
                  alt='instagram'
                  width={40}
                  height={40}
                  title='instagram'
                  className='icons'
                />
              </a>
            </li>
            <li>
              <a href={'https://www.youtube.com/@GFAwakening'}>
                <img
                  src={'/youtube.svg'}
                  alt='twitter'
                  width={40}
                  height={40}
                  title='youtube'
                  className='icons'
                />
              </a>
            </li>
          </ul>
        </ul>
      </section>
    </footer>
  );
}
