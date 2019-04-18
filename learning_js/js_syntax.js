function addNumbers(a, b) {
    return a+b;
}

const x = addNumbers(1,2);

//edit DOM element
document.getElementById('elementID').innerHTML = 'Hello World!';

//output
console.log(a);
document.write(a); //write to HTML
alert(a); //output alert box
confirm("Really?"); //yes/no dialog --> returns T/F depending on user

//for loops
for (let i = 0; i < 10; i++) {
    document.write(i + ' ');
}

let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum+=a[i];
}

let html = '';
for (let i of custOrder) {
    html += i + ' ';
}

array.forEach(function(element) {
   console.log(element);
});

//while loop
let i = 1;
while (i < 100) {
    document.write(i + ' ');
    i+=1;
}

let i = 1;
do {
    document.write(i + ' ');
} while (i < 100);

//variables
const d = 1 + 2 + '3'; //33 int to string conversions are automatic
const g = /()/; //regex --> /<regex_str>/
const PI = 3.14; //consts are capitalized!
const a = 1, b = 2, c = a+b; //one line
"use strict"; //x = 1 will throw error b/c var not declared
//numbers: 18, 3.14, 0b10011, 0xF6, NaN
/**
 * undefined, null, Infinity
 * undefined: var declared but not assigned
 * null: assignment val
 */

/**
 * ==: type conversion equals i.e.: 1=='1' rets True
 * ===: no type conversion equals i.e.: 1 === '1' rets False
 */

const student = {
    doSomething: function() {
        console.log('doing something');
    }
};

//strings
abc.indexOf('test'); //-1 if no match
abc.lastIndexOf('test'); //last occurance
abc.slice(3, 6); //removes abc[3:6]; neg vals count from behind
abc.replace('abc', '123'); //takes regex
abc.toUpperCase();
abc.toLowerCase();
abc.concat(" ", str2); //abc + ' ' + str2
abc.charAt(2);
abc.charCodeAt(2); //returns ascii val
abc.split(''); //splitting on characters

//numbers
let pi = 3.141;
pi.toFixed(0); //3
pi.toFixed(2); //3.14
pi.toPrecision(2); //3.1 --> total num of digits rounded
pi.valueOf();
Number(true);
Number(new Date());
parseInt('3 months'); //3
parseFloat('3.5'); //3.5
Number.MIN_VALUE;
Number.MAX_VALUE;
Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;

//math
let pi = Math.PI;
Math.round(4.4); //4
Math.pow(2,8) //2^8
Math.sqrt(49);
Math.abs(-3.14);
Math.random(); //[0,1]

//dates
const d = new Date(); //Sun Mar 24 2019 14:18:43 GMT-0400 (Eastern Daylight Time)
Date("2017-06-23");
Date("2017");

d.getDay(); //count begins at 0; same goes for everything else except getDate()

//arrays
const dogs = ['a', 'b', 'c'];
const dogs = new Array('a', 'b', 'c');

dogs.toString(); //'abc'
dogs.join(' *'); //'a *b *c
dogs.pop(); //removes last
dogs.push(); //pushes to end
dogs.shift(); //removes first element
dogs.unshift(); //add to beginning
delete dogs[0]; //changes to undefined
dogs.splice(2, 0, 'd', 'e'); //(where, how many to remove, elements list)
const animals = dogs.concat(cats, bird); //dogs, cats, birds in order
dogs.slice(1,4);
dogs.sort();
dogs.reverse();
x.sort(function(a, b) {return a-b}); //compares a,b and sorts based on val returned by func i.e.: 40-100=-60 so 40 comes before 100
x.sort(function(a, b) {return b-a});
x.sort(function(a, b) {return 0.5 - Math.random()});

eval('5+5');
String(23);
(23).toString();
Number('23');
/**
 * URI (uniform resource identifier) is a string that
 * identifies a particular resource
 * URL (uniform resource locator): web address
 */
decodeURI(enc);
encodeURI(uri);
decodeURIComponent(enc); //special chars included
encodeURIComponent(uri);
isFinite();
isNaN();
parseFloat();
parseInt();

//regex
const a = str.search(/CheatSheet/i);

//errors
throw 'error msg';
try {
    console.log('blah');
} catch (err) {
    console.log(err);
} finally {
    console.log('done!');
}

//JSON
const str = '{}';
let obj = JSON.parse(str); //parses json into object

const myObj = {};
const myJSON = JSON.stringify(myObj);
localStorage.setItem('testJSON', myJSON);
const text = localStorage.getItem('testJSON');
obj = JSON.parse(text);

//promises
function sum(a, b) {
    //pre-checks
    return Promise(function(resolve, reject) {
       setTimeout(function() {
           if (typeof a !== Number || typeof b !== Number) {
               return reject(new TypeError('NaN!'));
           }
           resolve(a+b);
       }, 1000);
    });
}

const myPromise = sum(10, 5);
myPromise.then(function (result) {
   console.log(result);
   return sum(null, 'foo');
}).then(function () {

}).catch(function(err) {
    console.error(err)
});






















