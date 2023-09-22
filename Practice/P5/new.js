let x = 0;
const cannot = "Hello";
var changeMe = 10;

//Output should be "0 Hello 10"
console.log(x, cannot, changeMe);
x = 10;
changeMe = "(:";
//The new output should be "10 Hello (:"
console.log(x, cannot, changeMe);

const people = ["michael", "xander", "peterson", "ben"];
//output should be peterson
console.log(people[2]);
people.push("goofy");
//output should be goofy
console.log(people[4]);

let lst = 20;
let bst = 5;
let di = lst / bst;

//output should be 4
console.log(di);

let truth = true;

if(truth){
    console.log("You are telling the truth");
    truth = false;
}

console.log(truth);