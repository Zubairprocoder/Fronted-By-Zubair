console.log("loops in arrays");
let arr = [1, 24, 43, 65, 7, 8, 87, 99];

// for loops
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// for Each loops
// arr.forEach((index, value, arr) => {
//   console.log(value, index, arr);
// });

// for in loops
// let obj = {
//   Name: "Zubair",
//   Skills: "Freelancer",
//   Age: 19,
// };
// for (const key in obj) {
//   if (!Object.hasOwn(obj, key)) continue;

//   const element = obj[key];

//   console.log(key, element);
// }

// for of loops
for (const value of arr) {
  console.log(value);
}
