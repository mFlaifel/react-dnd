import { FC } from 'react';
import { Knight } from '../Knight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BoardSquare } from '../BoardSquare';

const renderPiece = (
  x: number,
  y: number,
  [knightX, knightY]: [number, number]
) => {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
};

const renderSquare = (i: number, knightPosition: [number, number]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
};

interface Props {
  knightPosition: [number, number];
}

export const Board: FC<Props> = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};
