/**
 * Function constructors
 */
var User = function(name) {
	this.name = name;
	this.admin = true;

	var private = 'this is private variable';

	this.sayHello = function() {
		return 'Hello. My name is ' + this.name + '.';
	}
};

var farrukh = new User('Farrukh');
var sevara = new User('Sevara');

console.log(farrukh.sayHello());
console.log(sevara.sayHello());

var MyApp = {
	User: function(name) {
		this.name = name;
		this.admin = true;
	}
};

var otherUser = new MyApp.User('Other');
console.log(otherUser);

console.log('Farrukh in User?', farrukh instanceof User);
console.log('Sevara in User', sevara instanceof User);
console.log('OtherUser in User', otherUser instanceof User);
console.log('OtherUser in MyApp.User', otherUser instanceof MyApp.User);

console.log('Farrukh constructor: ', farrukh.constructor);
console.log('Sevara constructor: ', sevara.constructor);
console.log('OtherUSer constructor: ', otherUser.constructor);
