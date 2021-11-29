function twoNumberSum(array, targetSum){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (j == i) {
                j++;
            }
            if (array[i] + array[j] == targetSum) {
                return [array[i], array[j]];
            }            
        }
    }
    return [];
}
exports.twoNumberSum =  twoNumberSum;