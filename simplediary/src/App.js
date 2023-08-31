import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dumyList = [
  {
    id: 1,
    author: "피치1",
    content: "good hi",
    emotion: 5,
    // 시간을 받아서 ms로 바꿔줌
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "피치2",
    content: "good hi",
    emotion: 5,
    // 시간을 받아서 ms로 바꿔줌
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "피치3",
    content: "good hi",
    emotion: 5,
    // 시간을 받아서 ms로 바꿔줌
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diarylist={dumyList} />
    </div>
  );
}

export default App;
