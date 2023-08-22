// 조건문 upgrade
function isKoreanFood(food) {
  if (["불고기","볶음밥","떡볶이"].includes(food)){
    return true
  }
  return false
}

const food1 = isKoreanFood("파스타")
const food2 = isKoreanFood("불고기")

console.log(food1);
console.log(food2);

const meal = {
  '한' : "불",
  "중" : "짜",
  "일" : "초"
}

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
}

console.log(getMeal('한'));
console.log(getMeal());