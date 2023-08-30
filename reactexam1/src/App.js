import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function App() {
  const func = () => {
    return "func";
  };
  const number = 5;
  return (
    <div className="App">
      <MyHeader />
      <h3>Hi {func()}</h3>
      <b id="bold_text">
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
