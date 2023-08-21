// 객체 
// 객체 생성자 사용
// let person = new Object();

// 객체 리터럴 방식
// let person = {
//   key : 'value',  // 프로퍼티
//   key1 : 123,
//   key2 : true,
//   key3 : undefined,
//   key4 : [1, 2],
//   key5 : function() {}
// };

// console.log(person);
// // 점표기법
// console.log(person.key1);
// console.log(person.key2);
// // 괄호 표기법
// console.log(person['key4']);

// 객체에 값 추가하기
let person = {
  name : "autumn",
  age : 28
}

person.location = "Korea"
person["gender"] = "W"
console.log(person)

// 값 수정하기
person.age = "20"
console.log(person)

// 값 삭제하기 -> 실제로 메모리에서는 안지워짐
delete person.age;
console.log(person)

// 기존의 age를 메모리에서 아예 날릴 수 있음
person.age = null;
console.log(person)

const person1 = {
  name: 'aris',
  age: 18,
  say : function() {
    console.log(`안녕 나는 ${this["name"]}`)
  }
}

person1.say()

// 내부에 프로퍼티가 있는지 확인하기
console.log(`${"name" in person}`);