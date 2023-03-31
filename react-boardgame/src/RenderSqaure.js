import { useState } from 'react'
import Square from './Square';

function RenderSquare() {
  const [ countArray, setCountArray ] = useState(Array(3).fill(0));
  const onClickButton = (id) => {
    let nextArray = Array(3).fill(0);
    for(let i=0; i < countArray.length; i++) {
      if (i === id) {
        nextArray[i] = countArray[i]+1;
      } else {
        nextArray[i] = countArray[i];
      }
    }
    setCountArray (nextArray);
  }
  const testRender = (i, countArray, onClickButton) => {
    return <Square id={i} num={countArray[i]} onClickButton={onClickButton}/>
  }
  return (
    <div>
      {testRender(0, countArray, onClickButton)}
      {testRender(1, countArray, onClickButton)}
      {testRender(2, countArray, onClickButton)}
    </div>
  );
}

export default RenderSquare;