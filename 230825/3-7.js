// 동기 & 비동기
// 동기 처리의 단점
// 하나의 작업이 너무 오래걸리면, 전반적인 흐름이 느려짐
// 자스는 싱글 스레드 방식
// 스레드가 하나여도 여러 작업을 동시에 수행하는 게 비동기 처리 방식
// 비동기에서 작업이 끝났는지 확인하는 것 : 콜백 함수

// function taskA() {
//   console.log("A 작업 끝");
// }
// // A가 끝나기 전에 log가 동작할 수 없는 동기적 방식
// taskA()
// console.log("코드 끝 ");

// 비동기로 바꿔보자
function taskA(a, b, callBack) {
  setTimeout(()=> {
    const res = a + b;
    callBack(res);
  }, 3000)
}

// 1초 후 실행
function taskB(a, callBack) {
  setTimeout(()=>{
    const res = a * 2;
    callBack(res);
  }, 1000);
}


// 2초 후 실행
function taskC(a, callBack) {
  setTimeout(()=>{
    const res = a * -1;
    callBack(res);
  }, 2000);
}

// // log가 먼저 출력되고 3초 후에 B가 실행
// taskA(3, 4,(res) =>{
//   console.log("A TASK RESULT : ", res);
// })


// taskB(7, (res) => {
//   console.log('B task result : ', res);
// });


// taskC(14, (res) =>{
//   console.log("C task result : ", res);
// })

taskA(4, 5, (a_res) =>{
  console.log("A result : ", a_res)
  taskB(a_res, (b_res) =>{
    console.log("B result : ", b_res);
    taskC(b_res, (c_res)=> {
      console.log("C result : ", c_res);
    });
  });
});

console.log("코드 끝")