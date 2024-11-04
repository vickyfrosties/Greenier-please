import { useEffect } from 'react';
import DivInfo from '../../Components/DivInfo/DivInfo';
import { killgame } from '../Game/Game';

const Info = () => {
  useEffect(() => {
    const GAME_CANVA = document.querySelector('canvas');
    killgame();
  }, []);

  return (
    <>
      <DivInfo />
    </>
  );
};
export default Info;