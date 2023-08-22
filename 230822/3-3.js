// 단락 회로 평가 -> 뒤에 까지 안가고 연산이 끝나는 것
// 불리언 연산자
// AND 연산자는 앞이 false면 뒤까지 볼필요 X
console.log(true && true);
// OR 연산자는 앞이 true면 뒤까지 볼필요 X
console.log(true || true);

console.log(!true);

const getName = (person) => {
  const name =  person && person.name;
  return name || "객체가 아님"
}

let person;
let person2 = {name:"aris"};
const name1 = getName(person)
console.log(name1);
const name2 = getName(person2)
console.log(name2);