import NewsCard from './newsCard';

export default function News() {
  return (
    <section className='flex flex-col justify-center items-center px-4 w-full max-w-[1250px]'>
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        NEWS
      </h1>

      <article className='flex flex-row gap-4 justify-around py-5 my-4 w-full h-full'>
        <NewsCard
          title={'Increible titulo largo'}
          description={
            'Pero mira vos que descripcion mas descriptiva che no puede ser que haya tanta informacion en esta descripcion, obviamente todo esto es muy informativo y no es nada para rellenar el espacio vacio, no, como se te ocurre pensar en eso'
          }
          image={'/Random-1822.jpg'}
          date={'12/12/12'}
        />
        <NewsCard
          title={'Tremendo'}
          description={'Lorem ipsum dolor sit amet'}
          image={'/Random-1822.jpg'}
          date={'12/12/12'}
        />
        <NewsCard
          title={'Waos'}
          description={'Waos'}
          image={'/Random-1822.jpg'}
          date={'12/12/12'}
        />
      </article>
    </section>
  );
}
