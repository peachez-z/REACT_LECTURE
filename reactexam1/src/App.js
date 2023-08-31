import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./counter";
import Container from "./container";

function App() {
  const number = 5;
  return (
    <Container>
      {/* container의 chindren으로 아래 값들이 들어옴 ! */}
      <div>
        <MyHeader />
        {/* props */}
        <Counter initialValue={number} />
        <MyFooter />
      </div>
    </Container>
  );
}

export default App;
