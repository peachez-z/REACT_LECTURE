import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      {/* 짝수 홀수 검증을 위해 count 전달 */}
      <OddEvenResult count={count} />
    </div>
  );
};

// default 값을 설정하여 에러를 방지할 수 있다.
Counter.defaultProps = {
  initialValue: 0,
};
export default Counter;
