import { DragPreviewImage, useDrag } from 'react-dnd';
import { ItemTypes } from '../../Utils/dndConstants';
import { knightImage } from '../../Utils/knightImage';

export const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </div>
    </>
  );
};
