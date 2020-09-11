const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const callbackF = (accum, current) => accum + current
let totalBatteries = batteryBatches.reduce(callbackF, 0)