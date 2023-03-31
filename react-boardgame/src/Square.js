function Square(props) {
  return (
    <button onClick={()=>props.onClickButton(props.id)}> {props.num} </button>
  );
}

export default Square;