import Image from 'next/image';
import '../css/classesCard.css';
export default function ClassesCard({
  path1,
  path2,
  className,
  image,
  description
}) {
  return (
    <section className='flex justify-center w-full'>
      <article className='flex'>
        <ul>
          <li>{className}</li>
          <li>{path1}</li>
          <li>{path2}</li>
        </ul>

        <Image
          src={image}
          alt={className}
          width={300}
          height={500}
          className='backgroundImage'
        />
        <p>{description}</p>
      </article>
    </section>
  );
}
