// // promise 콜백 지옥 탈출하기
// function isPositive(number, resolve, reject){
//   // 2초 후 실행
//   setTimeout(()=>{
//     if (typeof number === 'number'){
//       // 성공
//       resolve(number >= 0? "양수":"음수")
//     }else{
//       // 실패
//       reject("숫자가 아님")
//     }
//   }, 2000)
// }

// // promise 이용해서 비동기 처리
// function isPositiveP(number){
//   // 비동기 작업을 수행하는 함수
//   const executor = (resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === 'number'){
//         // 성공
//         resolve(number >= 0? "양수":"음수")
//       }else{
//         // 실패
//         reject("숫자가 아님")
//       }
//     }, 2000)
//   }
//   // 프로미스 객체를 생성하면서 executor 함수가 실행됨
//   const asyncTask = new Promise(executor);
//   return asyncTask;
// }

// const res = isPositiveP(101);
// res.then((res) => {console.log("작업 성공 ",res);})
//   .catch((err)=>{console.log("작업 실패" , err);})

// promise로 콜백 지옥 막기
function taskA(a, b){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const res = a+b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

const bPromiseResult = taskA(5,1)
.then((a_res) =>{
  console.log("A RESULT: ", a_res);
  return taskB(a_res);
});

console.log("띵띵");

bPromiseResult.then((b_res)=>{
  console.log("B RESULT : ", b_res);
  return taskC(b_res)
})
.then((c_res)=>{
  console.log("C RESULT :", c_res);
});


// // 콜백 지옥
// taskA(4, 5, (a_res) =>{
//   console.log("A result : ", a_res)
//   taskB(a_res, (b_res) =>{
//     console.log("B result : ", b_res);
//     taskC(b_res, (c_res)=> {
//       console.log("C result : ", c_res);
//     });
//   });
// });