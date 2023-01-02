function sum(a, b) {
    return a + b;
}

function detail(name, sum) {
    console.log(`${name} ${sum}`);
}

// detail("Result", sum(10,20))

// // Q:2)
setTimeout(() => {
    let count = 1;
    console.log(count++);
    setTimeout(() => {
        console.log(count++);
        setTimeout(() => {
            console.log(count++);
            setTimeout(() => {
                console.log(count++);
                setTimeout(() => {
                    console.log(count++);
                    setTimeout(() => {
                        console.log(count++);
                        setTimeout(() => {
                            console.log(count++);
                        }, 7000)
                    }, 6000)
                }, 5000)
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);

// Q:3)

const printNumberPromise = ms => new Promise(resolve => setTimeout(resolve, ms));
let chain = Promise.resolve();
for (let count = 1; count <= 7; count++) {
    chain = chain.then(() => {
        console.log(count);
        return printNumberPromise(count * 1000);
    });
}


// // Q:4)
const promise = new Promise(function(res, rej) {
    let result = "";
    if (result == "yes") {
        res("promise resolved");
    } else {
        rej("promise rejected");
    }
})

promise.then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log("Error", err);
})


// Q:5)

// Main function
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
}

// Add function
const add = (array) => {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    console.log(sum);
}

// Calling main function
mainFunction(add);

// Q:6)
setTimeout(() => {
    console.log("Hey,")
    setTimeout(() => {
        console.log("have");
        setTimeout(() => {
            console.log("a");
            setTimeout(() => {
                console.log("nice");
                setTimeout(() => {
                    console.log("day");
                }, 5000)
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000)

// // Q:7)
const promise2 = new Promise(function(res, rej) {
    let num = 7;
    if (num % 2 == 0) {
        res("its even");
    } else {
        rej("its not even");
    }
})

promise2.then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log("Error", err);
})

// Q:8)
const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);