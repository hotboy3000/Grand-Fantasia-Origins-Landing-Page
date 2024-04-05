'use client';

import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import ClassesCard from './classesCard';
import '../css/classes.css';

export default function Classes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const showClass = (index) => {
    if (isAnimating.current) return; // If animation is in progress, do not proceed

    isAnimating.current = true; // Set animation flag to true
    gsap.to('.class-card', {
      display: 'none',
      duration: 0,
      opacity: 0,
      x: -100,
      ease: 'power2.in'
    });
    setCurrentIndex(index);
    gsap.to(`#class-${index}`, {
      display: 'flex',
      duration: 1,
      opacity: 1,
      x: 0,
      ease: 'back.inOut',
      onComplete: () => {
        isAnimating.current = false; // Reset animation flag
      }
    });
  };

  return (
    <section className='flex flex-col justify-center px-4 w-full'>
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        CLASSES
      </h1>

      <section className='flex justify-center py-5 mt-9 w-full h-full bg-white'>
        <article
          className={`flex justify-center class-card warrior`}
          id='class-0'
        >
          <ClassesCard
            path1={'BERSERKER'}
            path2={'PALADIN'}
            job={'FIGHTER'}
            image={'/classes/warrior.png'}
            hometown={'Kaslow'}
            description={`Fighters are known for their strength and power and are capable of using a wide variety of combat weapons. At level 15 they advance to Warrior, and at level 30 they get to choose between Berserker or Paladin.`}
          />
        </article>

        <article
          className={`hidden justify-center class-card archer`}
          id='class-1'
        >
          <ClassesCard
            path1={'RANGER'}
            path2={'ASSASSIN'}
            job={'HUNTER'}
            image={'/classes/archer.png'}
            hometown={'Jale'}
            description={`Hunters are masters of ranged attack, capable of using swords, bows and firearms. At level 15 they advance to Archer, and at level 30 they get to choose between Ranger or Assassin.`}
          />
        </article>

        <article
          className={`hidden justify-center class-card priest`}
          id='class-2'
        >
          <ClassesCard
            path1={'CLERIC'}
            path2={'SAGE'}
            job={'ACOLYTE'}
            image={'/classes/priest.png'}
            hometown={'Ilya'}
            description={`Acolytes are powerful healers, capable of resurrecting players from the brink of death and even resurrecting them after death. At level 15 they advance to Priest, and at level 30 they get to choose between Cleric or Sage.`}
          />
        </article>

        <article
          className={`hidden justify-center class-card mage`}
          id='class-3'
        >
          <ClassesCard
            path1={'WIZARD'}
            path2={'NECROMANCER'}
            job={'SORCERER'}
            image={'/classes/mage.png'}
            hometown={'Ilya'}
            description={`Sorcerers are mysterious, wielding the powers of magic with great control and dedication. At level 15 they advance to Mage, and at level 30 they get to choose between Wizard or Necromancer.`}
          />
        </article>

        <article
          className={`hidden justify-center class-card mechanic`}
          id='class-4'
        >
          <ClassesCard
            path1={'DEMOLITIONIST'}
            path2={'ENGINEER'}
            job={'MECHANIC'}
            image={'/classes/archer.png'}
            hometown={'Jale'}
            description={`Mechanics are half-man, half-machine specialized in armed combat and heavy weaponry. Their damage makes them a valued ally and ferocious enemy. At level 15 they advance to Machinist, and at level 30 they get to choose between Demolitionist or Engineer.`}
          />
        </article>

        <article
          className={`hidden justify-center class-card traveler`}
          id='class-5'
        >
          <ClassesCard
            path1={'TIME TRAVELER'}
            path2={'VOID RUNNER'}
            job={'DRIFTER'}
            image={'/classes/archer.png'}
            hometown={'Ilya'}
            description={`The Wanderer is a versatile class that excels in both melee and ranged combat. They are adept at wielding Katanas and Key weapons, making them adaptable to different playstyles. At level 15 they advance to Drifter, and at level 30 they get to choose between Time Traveler or Void Runner.`}
          />
        </article>
      </section>

      <article className='flex justify-center mt-9 border-8 border-white bg-navbar'>
        <ul className='flex gap-5'>
          <li
            onClick={() => showClass(0)}
            className={`cursor-pointer ${currentIndex === 0 ? '' : 'gray'}`}
          >
            <Image
              src={'/classes/warrior-thumbs.png'}
              alt={'Warrior'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(1)}
            className={`cursor-pointer ${currentIndex === 1 ? '' : 'gray'}`}
          >
            <Image
              src={'/classes/archer-thumbs.png'}
              alt={'Archer'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(2)}
            className={`cursor-pointer ${currentIndex === 2 ? '' : 'gray'}`}
          >
            <Image
              src={'/classes/priest-thumbs.png'}
              alt={'Priest'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(3)}
            className={`cursor-pointer ${currentIndex === 3 ? '' : 'gray'}`}
          >
            <Image
              src={'/classes/mage-thumbs.png'}
              alt={'Mage'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(4)}
            className={`cursor-pointer ${currentIndex === 4 ? '' : 'gray'}`}
          >
            <Image
              src={'/classes/machinist-thumbs.png'}
              alt={'Machinist'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(5)}
            className={`cursor-pointer ${currentIndex === 5 ? '' : 'gray'}`}
          >
            <Image
              src={'/classes/traveler-thumbs.png'}
              alt={'Warrior'}
              width={100}
              height={100}
            />
          </li>
        </ul>
      </article>
    </section>
  );
}
