// count 값을 받아옴
const OddEvenResult = ({ count }) => {
  console.log(count);
  return <div>{count % 2 === 0 ? "짝수" : "홀수"}</div>;
};

export default OddEvenResult;
