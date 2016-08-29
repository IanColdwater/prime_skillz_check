// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4
function foo() {
    return 4;
}

// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments

function bar(a, b) {
  return a * b;
}

// 3 - Write a function expression
// that takes one argument and
// console logs that value.

var baz = function(z) {
  console.log(z);
}

// 4 - Write a function declaration
// that takes a number and divides it
// by two.

function qux(x) {
  return x / 2;
}

// 5 - Call the function from 4 and
// pass it into the function from 2 called with
// the arguments 10, 20. Console log the result.

// This is the problem we talked about. I'm having trouble remembering the order of nested functions and to be honest I'm not sure it fully sank in in the first place. Here is a guess, which I'm quite sure is wrong:

console.log((qux(bar(10, 20))));
