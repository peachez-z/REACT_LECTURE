// // 숫자형
// let age = 25;

// let tall = 175.9;

// console.log(age + tall)

// // 모두 숫자형임
// let inf = Infinity;
// let mininf = -Infinity;
// let nan = NaN;

// // 문자열
// let name = "aris";
// let name2 = 'hihoomi'
// // 템프릿 리터럴 -> ${} 문자열로 바꾸기
// let name3 = `miyu ${name2}`;

// console.log(name,name2,name3)

// // 불린형
// let isSwitchOff = false

// // null
// let a=null;
// console.log(a);

// // undefined
// let b;
// console.log(b)

// 형변환
let numberA = 12;
let numberB = 2;
let numberC = '2';

console.log(numberA*numberB)
// 다른 자료형간의 연산을 수행할 때 자료형을 바꿔버림 / 의도하지 않았음
// 묵시적 형변환
console.log(numberA*numberC)

// 문자열과 숫자의 덧셈은, 숫자를 문자열로 바꿈
console.log(numberA+numberB)
// 명시적 형변환
// 문자열 값 받아서 숫자로 바꾸기 parseInt
console.log(numberA+parseInt(numberC))
console.log(numberA+numberC)