import Link from 'next/link';
import ClassesCard from './classesCard';
export default function Classes() {
  return (
    <section className='flex flex-col justify-center w-full'>
      <h1 className='text-4xl text-center'>Classes</h1>

      <article>
        <ClassesCard
          path1={'Berkerker'}
          path2={'Paladin'}
          className={'Warrior'}
          image={'/classes/warrior.png'}
          description={
            'Los luchadores son conocidos por su fuerza y poder y son capaces de utilizar una gran variedad de armas de combate.'
          }
        />
      </article>

      <article className='flex justify-center'>
        <ul className='flex gap-5 p-5'>
          <Link href={'#'}>
            <li>Warrior</li>
          </Link>
          <Link href={'#'}>
            <li>Archer</li>
          </Link>
          <Link href={'#'}>
            <li>Priest</li>
          </Link>
          <Link href={'#'}>
            <li>Mage</li>
          </Link>
          <Link href={'#'}>
            <li>Machinist</li>
          </Link>
          <Link href={'#'}>
            <li>Traveler</li>
          </Link>
        </ul>
      </article>
    </section>
  );
}
