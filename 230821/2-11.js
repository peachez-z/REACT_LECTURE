// 반복문
for(let i = 1; i <= 100; i++){
  console.log('gg')
}

const arr = [1, 2, 3]

for (let i = 0 ; i < arr.length; i ++){
  console.log(arr)
}

let person = {
  name: 'autumn',
  age: 28,
  tall: 160
}

const Keys = Object.keys(person);

for (let i=0; i < Keys.length; i++){
  console.log(Keys[i])
  console.log(person[Keys[i]])
}