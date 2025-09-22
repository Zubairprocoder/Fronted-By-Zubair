console.log("Classes _ Objects - Object Oriented Programming in Js ");
// let obj = {
//   a: 1,
//   b: "Zubair",
// };
// console.log(obj);
// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };
// rabbit.___proto__ = animal; //sets rabbit.[[prototype]] = animal

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created....");
  }
  eats() {
    console.log("Kha rha hoon");
  }
  jumps() {
    console.log("Kood raha hoon");
  }
}
class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Object is created and he is a lion as beautiful....");
  }
  eats() {
    super.eats();
    console.log("ma khud kha rha hoon tang na kro bro");
  }
}
let a = new Animal("Bunny");
console.log(a);
let l = new Lion("shera");
console.log(l);
