/**
 * 
 * @param {Array} array 
 * @param {Array} values 
 * @returns 
 */
function getDifferentElements(array, values){
    return array.filter((item)=> !values.includes(item)); 
}

console.log(getDifferentElements([1,'2',4,5,6,7,2,1,'g','a'], ['2',1,3,4,6,7]));