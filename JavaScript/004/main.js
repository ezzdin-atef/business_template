function getNumbersBefore(num) {
  if (num <= 0) return console.log("Negative Numbers & Zero Not Allowed");

  let res = "";
  for (let i = 1; i <= num; i++) res += i;

  return console.log(res);
}
// getNumbersBefore(0); // 12345678910
