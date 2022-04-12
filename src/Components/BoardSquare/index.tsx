import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { canMoveKnight, moveKnight } from '../../Game';
import { ItemTypes } from '../../Utils/dndConstants';
import { Overlay } from '../Overlay';
import { Square } from '../Square';

interface Props {
  x: number;
  y: number;
}

export const BoardSquare: FC<Props> = ({ x, y, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      canDrop: () => canMoveKnight(x, y),
      drop: () => moveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y]
  );
  const black = (x + y) % 2 === 1;
  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>{' '}
      {isOver && !canDrop && <Overlay color='red' />}
      {!isOver && canDrop && <Overlay color='yellow' />}
      {isOver && canDrop && <Overlay color='green' />}
    </div>
  );
};
