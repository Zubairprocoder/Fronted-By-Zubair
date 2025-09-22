console.log("callbacks in js");
console.log("Zubair is a good freelancer");
setTimeout(() => {
  console.log("I am inside settimeout");
}, 0);
setTimeout(() => {
  console.log("I am inside settimeout 2");
}, 0);
console.log("The End");
const fn = () => {
  console.log("no thing");
};

const callbacks = (arg) => {
  console.log(arg);
  fn()
};
const loadscript = (src, callbacks) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callbacks("Zubair");
  document.head.append(sc);
};
loadscript("www.facebook.com", callbacks);
