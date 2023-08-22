// 삼항연산자
let a = 3;
a >= 0 ? console.log("양수") : console.log("음수");

let b = [];
b.length == 0 ? console.log("빈배열") : console.log("안비었음");

// 상수에 저장해서 사용도 가능
const arrayStatus = b.length == 0 ? "빔" : "안빔";
console.log(arrayStatus);

// truthy falsy 이용하기
let c;
const result = c ? true : false;
console.log(result);

let d = [];
const result2 = d ? true : false;
console.log(result2);

// 중첩해서 사용하기
// 학점 계산 프로그램
let score = 100;

score >= 90 ? console.log("A+")
        : score >= 50
        ? console.log("B+")
        : console.log("F");
