import Image from 'next/image';
import '../../css/classesCard.css';
export default function ClassesCard({
  path1,
  path2,
  className,
  image,
  description
}) {
  return (
    <section className='flex w-full'>
      <article className='left'>
        <ul>
          <li>{className}</li>
          <li>{path1}</li>
          <li>{path2}</li>
        </ul>
      </article>

      <article className='right'>
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
