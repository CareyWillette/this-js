/*
  - New and Window Binding
*/

// Where is this function invoked?

//'new'

// When a function is invoked with the 'new' keyword. the 'this'
// keyword inside that function is bound to the new object being
// constructed
var Animal = function(color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');
var elephant = new Animal('grey', 'Gary', 'Elephant');
console.log(zebra);
console.log(elephant);


var sayAge = function() {
  console.log(this.age);
};

var me = {
  age: 25
};

sayAge();
window.age = 35;
sayAge();
