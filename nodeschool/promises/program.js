require('es6-promise');

/**
Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300ms, using setTimeout.

Then, print the contents of the promise after it has been fulfilled by passing
console.log to then.

NOTES:
promises are used for async operations
funcs can return a promise to which we set callbacks to promise.then(<callbacks..>)
useful for cleaner code and not having to chain callbacks
*/

let promise = new Promise(function(fulfill, reject) {
	setTimeout(function() {
		fulfill('FULFILLED!');
	}, 300);	
});

promise.then(function(value) {
	console.log(value);
});

