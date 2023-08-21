console.log(helloB())
// console.log(helloA())

// 함수 표현식
// 익명 함수를 변수에 담아서 사용하는 방식
let helloA = function(){
  return "Hi1"
};

// 함수 선언식 ( 호이스팅 대상 O )
function helloB(){
  return "Hi2"
}

// 함수 표현식 -> 화살표 함수
// 호이스팅의 대상 X
let helloC = () => {
  return 'Hi3'
}
console.log(helloC())