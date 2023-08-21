// 콜백 함수 -> 함수의 파라미터로 함수를 넘기는 것
function checkMood (mood, goodCallback, badCallback){
  if(mood === 'good') {
    goodCallback();
  } else{
    badCallback();
  }
}

function cry(){
  console.log('action : cry')
}

function sing(){
  console.log('action : sing')
}

checkMood('good', sing, cry);