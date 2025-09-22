console.log("async await in js");
// async function getData(params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }
async function getData(params) {
  let x = await fetch("https://json");
  let data = await x.json();
  return data;
}
async function main() {
  console.log("Loading modules");
  console.log("Do something else");
  console.log("Load data");
  let data = await getData();
  console.log(data);
  console.log("process data   ");
}
main();
