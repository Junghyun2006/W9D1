function curriedSum(numArgs) {
    const numbers = [];

    function _curriedSum(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            return numbers.reduce((acc, el) => {
                 return acc + el
            })
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

// const sum = curriedSum(5);
// console.log(sum(5)(30)(20)(1)) // => 56
// console.log(sum(10)) // => 66

Function.prototype.curry = function (numArgs) {
    const args = [];
    const fn = this;
    
    function _curried(arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return fn(...args);
        } else {
            return _curried;
        }
    }
    return _curried; 
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}


Function.prototype.curry2 = function (numArgs) {
    const args = [];
    const fn = this;

    function _curried(arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return fn.apply(this, args);
        } else {
            return _curried;
        }
    }
    return _curried;
}

console.log(sumThree(4, 20, 6)); // == 30
let f1 = sumThree.curry2(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
console.log(f1 = f1(6)); // = 30