const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

// Write Code Here To Make Property C Value Not Changed

Object.defineProperty(myObject, "c", {
  writable: false,
});

myObject.c = 100;
console.log(myObject.c);
