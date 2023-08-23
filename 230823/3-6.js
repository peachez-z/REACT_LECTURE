// spread 연산자
// const cookie = {
//   base: "cookie",
//   madeIn : 'korea'
// }

// const cookie2 = {
//   ...cookie,
//   toping: 'choco'
// }

// const cookie3 = {
//   ...cookie,
//   toping: 'banana'
// }

// const cookie4 = {
//   ...cookie,
//   toping: 'banilla'
// }

// console.log(cookie2, cookie3, cookie4);

// 배열
const cookie = ['촉촉한 쿠키', '안촉촉한 쿠키']
const topingCookie = ['바나나 쿠키', '초코 쿠키', '딸기 쿠키']

const allCookies = [...cookie,"그냥 쿠키", ...topingCookie ]
console.log(allCookies);