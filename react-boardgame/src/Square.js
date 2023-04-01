import { Button } from 'antd'
function Square(props) {
  return (
    <Button style={{width:"100px", height:"100px"}} onClick={()=>props.onClickButton(props.id)}> {props.num} </Button>
  );
}

export default Square;