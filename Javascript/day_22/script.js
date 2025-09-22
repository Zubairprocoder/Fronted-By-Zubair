console.log("advanced javascript");
async function sleep(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
function sum(a, b, c) {
  return a * b + c;
}
// IIfe in js
(async function main() {
  //   let a = await sleep();
  //   console.log(a)
  //   let b = await sleep();
  //   console.log(b)
  //   let [x, y] = [4, 7,67];
  //   let [x, y, ...rest] = [4, 7, 4,5,6,7,7,8,9];
  //   console.log(x, y, rest);
  //   let obj = {
  //     a: 1,
  //     b: 2,
  //     c: 3,
  //     d: 4,
  //   };
  //   let { a, b } = obj;
  //   console.log(a, b);
//   spread 
  let arr = [1, 7, 8];
  console.log(sum(...arr));
})();
