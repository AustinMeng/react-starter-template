import React, { useState } from "react";
import FButton from "./FButton";

function Counter(props) {
  // const [counter, setCounter] = useState(0);
  const { id } = props.match.params;
  const [counter, setCounter] = useState(id ? id : 0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div>
      <h3>Counter</h3>
      <hr />
      <h5>Counter: {counter}</h5>
      <FButton
        title="+"
        bgColor="green"
        textColor="white"
        action={increase}
      ></FButton>
      <FButton
        title="-"
        bgColor="red"
        textColor="white"
        action={decrease}
      ></FButton>
    </div>
  );
}

export default Counter;
