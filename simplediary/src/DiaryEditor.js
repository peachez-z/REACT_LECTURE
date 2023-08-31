import { useState, useRef } from "react";

const DiaryEditor = () => {
  // DOM 요소에 접근
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    alert("저장성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          // 레퍼런스 객체를 통해 input 태그에 접근 가능
          ref={authorInput}
          type="text"
          value={state.author}
          onChange={handleChangeState}
          name="author"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          name="content"
          onChange={handleChangeState}
        ></textarea>
      </div>
      <div>
        오늘의 감정 점수
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handlesubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
