import React, { useEffect, useState } from "react";

const UnmoutTest = () => {
  useEffect(() => {
    console.log("MOUNT!");
    // unmount 시점에 실행
    return () => console.log("UNMOUNT");
  }, []);
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setisVisible] = useState(false);
  const toggle = () => setisVisible(!isVisible);

  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // // mount
  // useEffect(() => {
  //   console.log("MOUNT");
  // }, []);

  // // update
  // useEffect(() => {
  //   console.log("UPDATE");
  // });

  // useEffect(() => {
  //   console.log(`count is update : ${count}`);
  //   if (count > 5) {
  //     alert("count가 5를 넘었습니다. 1로 초기화합니다.");
  //     setCount(1);
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log(`text is update : ${text}`);
  // }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmoutTest />}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
    </div>
  );
};

export default Lifecycle;
