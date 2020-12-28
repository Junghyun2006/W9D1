function sum(arg1,arg2,arg3,arg4) {
    return arg1 + arg2 + arg3 + arg4;
}

function sum(arg1, arg2, arg3, arg4, arg5) {
    return arg1 + arg2 + arg3 + arg4 + arg5;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);


function sum2(...args) {
    const sum = [...args].reduce((acc, el) => {
        return acc + el
    });

    return sum;
}

console.log(sum2(1, 2, 3, 4) === 10);
console.log(sum2(1, 2, 3, 4, 5, 6) === 21);

