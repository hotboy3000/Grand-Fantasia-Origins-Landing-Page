import NewsCard from './newsCard';

export default function News() {
  return (
    <section className='flex flex-col justify-center items-center px-4'>
      <h1 className='text-4xl'>NEWS</h1>

      <article className='flex flex-row justify-around py-5 w-full h-full'>
        <NewsCard
          link={'#'}
          title={'Increible'}
          description={'Pero mira vos que descripcion mas descriptiva che no puede ser que haya tanta informacion en esta descripcion, obviamente todo esto es muy informativo y no es nada para rellenar el espacio vacio, no, como se te ocurre pensar en eso'}
          image={'/Random-1822.jpg'}
        />
        <NewsCard
          link={'#'}
          title={'Tremendo'}
          description={'Lorem ipsum dolor sit amet'}
          image={'/Random-1815.jpg'}
        />
        <NewsCard
          link={'#'}
          title={'Waos'}
          description={'Waos'}
          image={'/Random-1837.jpg'}
        />
      </article>
    </section>
  );
}
