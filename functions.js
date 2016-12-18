// Three ways to declare functions:
// Function-style:
function functionName1 (arg1, arg2, arg3, argN) {

}

// Expression-style:
const functionName2 = function (arg1, arg2, arg3, argN) {

};

// Fat Arrow-style (ES6+):
const functionName3 = (arg1, arg2, arg3, argN) => {

};

/*
- when invoking a function, remember to include parens: ()
- functions don't have implicit returns (except with single line fat arrow style!!!)
   - retHi = () => "hi"; //when invoked will return "hi"
- can assign properties to functions using the . operator since a function is just an object
    - functionName3.strange = "good to know but probably won't use this"
*/
