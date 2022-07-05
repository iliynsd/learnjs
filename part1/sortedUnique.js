/** 
 * @description This function swaps elements in array
 * @param {Array} array
 * @param {Number} firstIndex 
 * @param {Number} secondIndex
 */
function swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
/**
 * @description This function returns sortd array
 * @param {Array} array 
 * @return {Array}
 */
function bubbleSortMas(array){
    for(let j = 0; j < array.length; j++){
        for(let i =0; i < array.length; i++){
            if(array[i] > array[i+1]){
                swap(array, i, i+1);
            }
        }
    }

    return array;
}
/**
 * @description This function returns sorted array wth unique elements
 * @param {Array} array 
 * @returns {Array}
 */
function sortedUniqFromLodash(array){
    return bubbleSortMas(array).reduce((memo, item) =>
    {
        if(memo.indexOf(item) < 0) memo.push(item); 
        return memo;
    }, []);
}

console.log(sortedUniqFromLodash([1,2,-2,0,3,1,2,7,5,3,6,83,2]));