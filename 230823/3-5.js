// // 배열의 비 구조화 할당
// let arr = [1,2,3]

// let one = arr[0]
// let two = arr[1]
// let thr = arr[2]

// console.log(one, two, thr);

// // 비 구조화 할당 하기
// let [one1, two1, thr1] = arr;
// console.log(one, two, thr);

// // 더 줄이기 -> 선언 분리 비 구조화 할당
// let [one2, two2, thr2] = [ 1, 2, 3 ]
// console.log(one2, two2, thr2);

// // 할당되지 않은 값 기본 값 지정해주기
// let [one3, two3, thr3, fou=4] = [ 1, 2, 3 ]
// console.log(one2, two2, thr2, fou);

// // 비 구조화 할당으로 swap
// let a = 10;
// let b = 20;
// [a, b] = [b, a]
// console.log(a, b)

// 객체의 비 구조화 할당
let obj = {one : 1, two : 2, thr : 3, name: 'autumn'};
// 순서가 아닌, 키 값을 기준으로 할당한다
// 변수의 이름을 바꿔서 할당할 수 도 있음
// 기본 값 할당도 가능
let {one, two, thr, name: myName, abc="응애"} = obj;
console.log(one, two, thr, myName, abc);