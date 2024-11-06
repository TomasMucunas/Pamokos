
function anyPositive(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return true; 
        }
    }
    return false; 
}


console.log(anyPositive([1, 2, 3, 4, 5])); // true
console.log(anyPositive([1, 2, -3, 4, 5])); // true
console.log(anyPositive([0, 0, 1])); // true
console.log(anyPositive([-10, -10, -10])); // false
console.log(anyPositive([-10, -10, 1])); // true