/**
 * @description This method returns a promise that will be executed when all the promised resolved or  resolved or one of them is rejected
 * @description If passed value is not a promise, it will converted to promise
 * @param {Array} array 
 * @returns Array with values if all promises resolved or return a value with rejected promise
 */
function all(array) {
    return new Promise((resolve, reject) => {
      let successArr = new Array(array.length);
      if (array.length == 0)
        resolve(successArr);
      let pending = array.length;
      let promises = array.map((value) => Promise.resolve(value));
      promises.forEach((promise, i) => {
        promise.then(function(result) {
          successArr[i] = result;
          pending -= 1;
          if (pending == 0)
            resolve(successArr);
        }, (error) => {
          reject(error);
        });
      });
    });
  }

function createSuccessPromise(value, time){
    return new Promise((resolve,reject) => {
        setTimeout(resolve, time, value);
    });
}
function createRejectPromise(value, time){
    return new Promise((resolve,reject) => {
        setTimeout(reject, time, value)
    });
}

//example
 all([createSuccessPromise(1, 5000),createSuccessPromise(3, 3000), createRejectPromise('reject', 1000)]).then(value => console.log(value)).catch(value => console.log(value));//expected result - reject


 /**
  * @description The method returns a completed or rejected promise, depending on what result the first of the passed promises ends with
  * @param {Array} array 
  * @returns 
  */
 function race(array) {
    return new Promise((resolve, reject) => {
      let promises = array.map((value) => Promise.resolve(value));
      promises.forEach((promise) => {
        promise.then((result) => {
            resolve(result);
        }, function(error) {
          reject(error);
        });
      });
    });
  }

  
//example  
 race([createSuccessPromise(5, 6000), createSuccessPromise(4, 3000)]).then(value => console.log(value));//expected result - 4