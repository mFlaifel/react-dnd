import { FC } from 'react';
import './index.css';
interface Props {
  black: boolean;
}

export const Square: FC<Props> = ({ black, children }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div style={{ backgroundColor: fill, color: stroke }} className='square'>
      {children}
    </div>
  );
};
