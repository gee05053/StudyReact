import { useState } from 'react'
import { Row, Col } from 'antd'
import Square from './Square';

function RenderSquare() {
  const idArray = [0,1,2]
  const [ x, setX ] = useState(0);
  const [ countArray, setCountArray ] = useState(Array(9).fill(''));
  const onClickButton = (id) => {
    setX(x+1);
    let nextArray = Array(9).fill(0);
    for(let i=0; i < countArray.length; i++) {
      if (i === id) {
        nextArray[i] = x;
      } else {
        nextArray[i] = countArray[i];
      }
    }
    setCountArray (nextArray);
  }
  const testRender = (i, countArray, onClickButton) => {
    return <Square id={i} num={countArray[i]} onClickButton={onClickButton}/>
  }
  return(
    <div>
      <h1>현재 숫자 : {x}</h1>
      {
        idArray.map((id)=> {
          return(
            <Row key={id}>
              <Col>
                {testRender((3*id), countArray, onClickButton)}
                {testRender((3*id)+1, countArray, onClickButton)}
                {testRender((3*id)+2, countArray, onClickButton)}
              </Col>
            </Row>
          );
        })
      }
    </div>
  );
}

export default RenderSquare;