// async&await
function delay(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// 3초뒤 결과 출력
async function helloAsync() {
  // await 줄에는 다 동기적으로 실행
  // async가 붙은 함수에만 사용 가능
  await delay(3000);
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main()
