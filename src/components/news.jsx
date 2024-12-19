import NewsCard from './newsCard';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  return (
    <section
      id='/news'
      className='flex flex-col justify-center items-center px-4 w-full'
    >
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        {t('News')}
      </h1>

      <article className='flex flex-row gap-4 justify-around my-4 w-full h-full'>
        <NewsCard
          title={t('Title')}
          description={t('Description')}
          image={'/DancingGM.gif'}
          date={'18/12/2024'}
          link={'/patchNotes'}
          linkText={'Read them here'}
        />
        <NewsCard
          title={t('Title1')}
          description={t('Description1')}
          image={'/SuprisedEmote.gif'}
          date={'15/12/2024'}
          link={'https://forms.gle/L6DU7qiZAS3szfCF9'}
          linkText={'Check it out'}
        />
        <NewsCard
          title={t('Title2')}
          description={t('Description2')}
          image={'/KissEmote.gif'}
          date={'12/12/12'}
          link={
            'https://discord.com/channels/1194037105156964437/1199110447090122792/1314291726286061690'
          }
          linkText={'Check it out'}
        />
      </article>
    </section>
  );
}
