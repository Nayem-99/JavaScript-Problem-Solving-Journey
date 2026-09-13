const myArray = [10, 20, 30, 50];

let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

console.log("Average: " + (sum / myArray.length));