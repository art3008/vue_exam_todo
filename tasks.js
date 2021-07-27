// const obj = {
//   a: 1,
//   b: 4,
//   c: 5,
//   d: 16,
// };
const obj2 = {
  a: 1,
  b: 4,
  c: 5,
  d: 16,
  f: 23,
};

const sum = (obj) => Object.values(obj).reduce((a, b) => a + b);

console.log(sum(obj2));
