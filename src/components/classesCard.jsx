import { useTranslation } from 'react-i18next';

export default function ClassesCard({
  path1,
  path2,
  job,
  image,
  hometown,
  description
}) {
  const { t } = useTranslation();

  return (
    <section className='flex justify-center w-full max-w-3xl'>
      <article className='flex'>
        <div className='flex flex-col justify-evenly'>
          <ul className='flex flex-col gap-6 justify-center'>
            <li className='self-center text-5xl'>{job}</li>
            <li className='self-center'>
              <img src={'/divider-5318234.svg'} width={350} height={10} />
            </li>
            <ul className='flex gap-20 justify-evenly text-2xl'>
              <li>{path1}</li>
              <li>{path2}</li>
            </ul>
          </ul>
          <div className='flex flex-col gap-2'>
            <span>
              {t('Hometown')}: {hometown}
            </span>
            <p>{description}</p>
          </div>
        </div>

        <img src={image} alt={job} width={300} height={500} />
      </article>
    </section>
  );
}
