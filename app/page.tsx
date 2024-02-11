'use client';

import Image from 'next/image';
import classes from './page.module.scss';
import askingOut from '@/assets/gifs/asking-out.gif';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [firstNoButtonVisibility, setFirstNoButtonVisibility] = useState(true);
  const [secondNoButtonVisibility, setSecondNoButtonVisibility] =
    useState(false);
  const [buttonPosition, setButtonPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 50, left: 50 });

  function getPosition(screenValue: number) {
    let newPosition = Math.random() * screenValue - 100;

    if (newPosition < 100) {
      newPosition += 100;
    }
    if (newPosition > screenValue - 150) newPosition -= 155;
    return newPosition;
  }

  const changePositionNoButton = () => {
    // Update the button position when clicked
    const top = getPosition(window.innerHeight);
    const left = getPosition(window.innerWidth);

    console.log({
      top: top,
      left: left,
    });
    setButtonPosition({
      top: top,
      left: left,
    });
  };

  const hidePrimeNoButton = () => {
    setFirstNoButtonVisibility(false);
    setSecondNoButtonVisibility(true);
  };

  return (
    <div className={classes.main}>
      <div className={classes.gifWrapper}>
        <Image src={askingOut} alt="mis" fill />
      </div>
      <h1>Pójdziesz ze mna na randkę?</h1>
      <div className={classes.buttonWrapper}>
        <button onClick={() => router.push('/yes')}>TAK</button>
        {firstNoButtonVisibility && (
          <button onClick={hidePrimeNoButton}>NIE</button>
        )}
      </div>
      {secondNoButtonVisibility && (
        <button
          className={classes.secondNoButton}
          onClick={changePositionNoButton}
          style={{
            top: `${buttonPosition.top}px`,
            left: `${buttonPosition.left}px`,
          }}
        >
          NIE
        </button>
      )}
    </div>
  );
}
