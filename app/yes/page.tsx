import classes from './page.module.scss';
import dancingBears from '@/assets/gifs/dancing_bears.gif';
import loveBears from '@/assets/gifs/love_bear.gif';
import loveBears2 from '@/assets/gifs/love_bear_2.gif';
import loveBears3 from '@/assets/gifs/love_bear_3.gif';
import pandaInCircle from '@/assets/gifs/panda_in_circle.gif';
import partyBear from '@/assets/gifs/Party-bear.gif';
import partyBear2 from '@/assets/gifs/Party-bear_2.gif';
import partyBear3 from '@/assets/gifs/Party-bear_3.gif';
import partyBear4 from '@/assets/gifs/Party-bear_4.gif';
import partyBear5 from '@/assets/gifs/Party-bear_5.gif';
import partyBear6 from '@/assets/gifs/Party-bear_6.gif';
import anotherBear from '@/assets/gifs/anotherBear.gif';
import anotherBear2 from '@/assets/gifs/anotherBear2.gif';
import anotherBear3 from '@/assets/gifs/anotherBear3.gif';

import Image from 'next/image';

export default function YesPage() {
  const images = [
    { src: dancingBears },
    { src: loveBears },
    { src: loveBears2 },
    { src: loveBears3 },
    { src: pandaInCircle },
    { src: partyBear },
    { src: partyBear2 },
    { src: partyBear3 },
    { src: partyBear4 },
    { src: partyBear5 },
    { src: partyBear6 },
    { src: anotherBear },
    { src: anotherBear2 },
    { src: anotherBear3 },
  ];
  return (
    <div className={classes.wrapper}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${classes.imageStyles} image${index + 1}`}
          style={{
            zIndex: index + 1,
          }}
        >
          <Image src={image.src} alt={`index${index}`} fill />
        </div>
      ))}
    </div>
  );
}
