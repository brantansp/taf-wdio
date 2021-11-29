//regular function
function product (a, b) {
    return a * b;
}

//function expression
productFnExp = function(a,b){
    return a * b;
}

//arrow function
productArrowFn = (a,b) => {
    return a*b;
}

//arrow function single statement
productSingleStmt = (a,b) => a*b

//arrow function single argument
squareRootSingleArgs = a => a*a

//arrow function no argument
noArgsFunction = () => 10 * 8

//immediately invoked function expression
;(function print (){
    console.log('calling an iife')
})()

console.log(product(3,4))
console.log(productFnExp(3,4))
console.log(productArrowFn(3,4))
console.log(productSingleStmt(4,5))
console.log(squareRootSingleArgs(6))
console.log(noArgsFunction())