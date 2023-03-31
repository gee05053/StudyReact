import { useState } from 'react';
import Square from './Square';

function RenderSquare() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count+1)
  }
  return (
    <div>
      <div>
        <Square count={count} onIncrease={onIncrease}/>
        <Square count={count} onIncrease={onIncrease}/>
        <Square count={count} onIncrease={onIncrease}/>
      </div>
      <div>
        <Square count={count} onIncrease={onIncrease}/>
        <Square count={count} onIncrease={onIncrease}/>
        <Square count={count} onIncrease={onIncrease}/>
      </div>
      <div>
        <Square count={count} onIncrease={onIncrease}/>
        <Square count={count} onIncrease={onIncrease}/>
        <Square count={count} onIncrease={onIncrease}/>
      </div>
    </div>
  );
}

export default RenderSquare;