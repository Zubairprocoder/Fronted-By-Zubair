console.log("exercise 10 in js");
/* Create a business name generator by combinging list adjective.

Adjective:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word
Bros
Limited
Hub
*/

let rand = Math.random();
console.log(rand);
let first, second, third;
// 0 0.33 0.66 1
if (rand < 0.33) {
  first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}
rand = Math.random();
// Second
if (rand < 0.33) {
  second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "Foods";
} else {
  second = "Garments";
}
rand = Math.random();
// Third
if (rand < 0.33) {
  third = "Bros";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "Limited";
} else {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);
