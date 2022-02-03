// let counter: number = 0;
// let instance;
// class Counter {
//   constructor() {
//     if (instance) {
//       throw new Error("only one instance allowed");
//     }
//     instance = this;
//   }
//   public getInstance() {
//     return this;
//   }
//   getCount() {
//     return counter;
//   }
//   increment() {
//     return ++counter;
//   }
//   decrement() {
//     return --counter;
//   }
// }
// const singlentonCounter = Object.freeze(new Counter());

let count = 0;

const singlentonCounter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(singlentonCounter);


export default singlentonCounter;
