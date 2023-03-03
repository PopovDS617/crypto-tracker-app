import { useEffect, useState } from 'react';
import MovingText from './MovingText';
import BlurLayer from '../../UI/Blur/BlurLayer';

function shuffleArray(arg: string) {
  const array = arg.split('');
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}
const basicText = `abcdefgh/ij&klmnop qrstuvwxy z0123456789
abcdef#g?hijklmno pq?rst&uv?wxyz0&123456789
abcdefg hijklmno&pq rstuvwxyz012/3456789
abcde#fghi jklmn&opq rstuvwxy/z/ 01234 56789
abcdefghi/jklm nopqrstuvw?xyz0123456789
ab#cd efgh ijklmnop/qr st uvwxyz0123456789
abcdefgh ijkl$ mnopq/rstuvwxyz 0123456789
abcd efghijklm&no/pqrstuvw?xyz01234 56789
ab cdef ghijklmnopq rstu/vwx yz0 123456789
abefghijklmnopqrstuvwxyz 0123456789avfz &
a bcdefghijk/&lmno pqrstuv/wxyz01 23456789
abcdef ghij klmnopq rstuvwx yz//1/23456789
abcdefghijklm nopqr/stuvwxyz0123456789
ab cdefghijklm nopq?rstuvwxy?z0 123456789
abcdefghijkl &mnopqrstuvwxyz0123456 789`;

const Banner = () => {
  const [text, setText] = useState<string>(basicText);

  useEffect(() => {
    setText(shuffleArray(basicText));
    const shuffleTimer = setInterval(() => {
      setText(shuffleArray(basicText));
    }, 180);
    return () => {
      clearInterval(shuffleTimer);
    };
  }, []);

  return (
    <div className="App">
      <BlurLayer>
        <MovingText movingText={text} />
      </BlurLayer>
    </div>
  );
};

export default Banner;
