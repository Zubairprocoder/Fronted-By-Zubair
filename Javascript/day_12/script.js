console.log("Exercise 11 Solution in js");
let a = 6;
function factorail(number) {
  let arr = Array.from(Array(number + 1).keys());

  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return c;
}
// facfor
function facfor(number) {
  let fac = 1;
  for (let index = 1; index <= number; index++) {
    fac = fac * index;
  }
  return fac;
}
console.log(factorail(a));
console.log(facfor(a));
