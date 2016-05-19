/*
  - Explicit
  - Call, Apply, and Bind
*/

// Where is this function invoked?

// Call, Apply, and Bind allow us to explicitly state
// what the this keyword is going to be in any given function.

// Call and Apply immediately invoke a function.

// Call pass in arguments one-by-one.
// Apply pass in arguments as array.

// Bind is the same thing as Call except instead of immediately
// invoking the function it's going to return a new function that
// can be invoked later.

var sayName = function(lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
}

var stacey = {
  name: 'Stacey',
  age: 34
};

var languages = ['Javascript', 'Ruby', 'Python'];

sayName.call(stacey, languages[0], languages[1], languages[2]);
sayName.apply(stacey, languages);
var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('\n' + 'LINE BREAK' + '\n');
// bind returns a function instead of invoking the original function
newFn();
