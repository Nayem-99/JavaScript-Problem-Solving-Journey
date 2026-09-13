function calculateAverage(arr) {
    if (arr.length === 0) return 0; // empty array হ্যান্ডেল করা
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

const myArray = [10, 20, 30, 50];
console.log(`Average: ${calculateAverage(myArray)}`);