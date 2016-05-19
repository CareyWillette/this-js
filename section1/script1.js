/*
  - Implicit Binding
*/

// Where is this function invoked?

// Left of the Dot at Call Time
var me = {
  name: 'CareyWillette',
  age: 30,
  sayName: function() {
    console.log(this.name);
  }
};

me.sayName();


// Motified Left of the Dot at Call Time
var sayNameMixin = function(obj) {
  obj.sayConsoleName = function() {
    console.log(this.name);
  };
};

var player1 = {
  name: 'Jordan Speith',
  age: 22
};

var player2 = {
  name: 'Tiger Woods',
  age: 40
};
console.log('\n');

console.log('before mixin: ');
console.log(JSON.stringify(player1));
console.log(JSON.stringify(player2));

console.log('\n');

console.log('with mixin: ');
sayNameMixin(player1);
sayNameMixin(player2);

console.log(player1);
console.log(player2);

console.log('\n');

player1.sayConsoleName();
player2.sayConsoleName();


// Nested invocation
var Player = function(name, age) {
  return {
    name: name,
    age: age,
    printName: function() {
      console.log(this.name);
    },
    instructor: {
      name: 'Butch Harmon',
      printName: function() {
        console.log(this.name);
      }
    }
  };
};

var gary = Player('Gary Player')
console.log('\n');
gary.printName();
gary.instructor.printName();
