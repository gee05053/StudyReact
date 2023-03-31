function Square(props) {
  return (
    <button onClick = {props.onIncrease}> {props.count} </button>
  );
}

export default Square;