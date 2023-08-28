//  API & fetch
// fetch : API를 호출할 수 있도록 도와주는 내장함수
async function getData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let jsonResponse = await response.json()
  console.log(jsonResponse);
}
getData()


// let response = fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then((res) => {console.log(res);});
