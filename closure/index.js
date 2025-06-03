/*
A closure is a function that remembers the variables from its lexical scope even when 
the function is executed outside that scope.

*/
function outerFunction(){
    let count = 0;
    return function(){
        count++;
        return count
    };
}
const increment = outerFunction();
console.log(increment())
console.log(increment())
console.log(increment())
