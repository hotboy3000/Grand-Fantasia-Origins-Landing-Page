export default function Home() {
  return (
    <section className='relative z-0 my-5 w-full'>
      <div className='flex justify-center items-center h-screen max-h-[84vh]'>
        <iframe
          src='https://www.youtube-nocookie.com/embed/-WGNOIzajds?si=rgSiULb3oo9Zm047&amp;controls=0;autoplay=1'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
          className='w-full h-full'
        ></iframe>
      </div>
    </section>
  );
}
