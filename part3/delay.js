/**
 * @description This method return a promise that will be resolved through the specified amount of ms
 * @param {Number} ms 
 * @returns 
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(5000).then(function () {
    console.log('5 seconds have passed!')
});