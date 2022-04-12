import { createRoot } from 'react-dom/client';

import './index.css';
import { observe } from './Game';
import { Board } from './Components/Board';

const container = document.getElementById('root') as Element;

const root = createRoot(container);

observe((knightPosition: [number, number]) =>
  root.render(<Board knightPosition={knightPosition} />)
);
