const largestProductOfThree = function (arr) {
  // 뒤에 세개 곱하는것
  //음수면 앞에 음수로 큰것 두개 곱하고 맨뒤 양수 곱하고
  arr.sort((a, b) => b - a).reverse; //작은거순서대로 정렬한거라서 reverse//기존의 arr바꿈=> 변수로 선언안해도돼
  const x = arr[0] * arr[1] * arr[2];
  const y = arr[arr.length - 1] * arr[arr.length - 2] * arr[0];

  return Math.max(x, y);
};
