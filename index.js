const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// reduce takes a callback function with 2 parameters: accumulator and currentValue
// accumulator is similar to: let sum = 0
// current value is one of the elements in the array
//current value will be added to accumulator 
const totalBatteries = batteryBatches.reduce((acc, cur) => { return acc + cur })