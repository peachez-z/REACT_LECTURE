// 배열 내장함수
// 배열 순회 함수
// const arr = [1,2,3,4];
// const newArr = [];

// arr.forEach((elm) => console.log(elm));
// arr.forEach(function (elm){
//   newArr.push(elm*2);
// });
// console.log(newArr)

// // 원본 배열의 모든 배열을 순회
// const newArr2 = arr.map((elm) => {
//   return elm*2;
// })

// const arr = [1,2,3,4];
// // 배열안에 존재하는지 검사 (===형식임)
// let number = 3;
// console.log(arr.includes(number))

// // 존재하는 인덱스 까지 -> 없을 경우 -1 반환
// console.log(arr.indexOf(number))

// const arr1 = [
//   {color:"red"},
//   {color:"blue"}
// ];
// console.log(arr1.findIndex((elm)=>elm.color == "blue"));

// // 조건에 일치하는 요소 그냥 가져오기
// const idx = arr1.findIndex((elm)=>elm.color == "blue")
// console.log(arr1[idx])

// const element = arr1.find((elm)=>elm.color == "blue")
// console.log(element);

// // 필터링
// const arr = [
//   {num:1, col:"red"},
//   {num:2, col:"blue"},
//   {num:3, col:"green"},
//   {num:4, col:"red"},
//   {num:5, col:"red"},
// ];

// console.log(arr.filter((elm) => elm.col === 'red'));

// // 배열 인덱스로 자르기
// console.log(arr.slice(0,3));

// // 배열 붙이기
// const arr2 = [
//   {num:6, col:'yellow'}
// ]
// console.log(arr.concat(arr2));

// 배열 정렬
let chars = ['나', '다', '가']
console.log(chars);
chars.sort();
console.log(chars);

// sort는 문자열 기준으로 정렬해서 숫자는 순서가 이상함
let numbers = [0, 1, 3, 2, 10, 30, 20]
numbers.sort();

console.log(numbers);
// 비교함수 만들기
// 오름차순 -> 내림차순은 이거 반대로하면 됨
const compare = (a,b) =>{
  if(a>b){
    // 큰 값이 뒤로 가
    return 1
  }else if(a<b) {
    // 작은 값이 앞으로 가
    return -1
  }else{
    // 이동 X
    return 0;
  }
}
numbers.sort(compare);
console.log(numbers);

// JOIN
const arr = ["하이", "또왔어", "잘가"]
console.log(arr.join());
console.log(arr.join(" "));