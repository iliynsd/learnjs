/**
 * @description This function implements SameValueZero algorithm
 * @param object1 
 * @param object2 
 * @returns {Boolean}
 */
function SameValueZero(object1, object2){
    if(typeof object1 !== typeof object2){
        return false;
    }
    if(typeof object1 == "number"){
        if(object1 == Nan && object2 == Nan){
            return true;
        }
        if(object1 == Infinity && object2 == -Infinity){
            return true;
        }
        if(object1 == -Infinity && object2 == Infinity){
            return true;
        }
        if(object1 == object2){
            return true;
        }

        return false;
    }

    return SameValueNonNumber(object1, object2);
}
/**
 * @description This function implements SameValueZeroNonNumber algorithm
 * @param object1 
 * @param object2 
 * @returns {Boolean}
 */
function SameValueNonNumber(object1, object2){
    if(typeof object1 == "number"){
        return false;
    }
    if(typeof object1 !== typeof object2){
        return false;
    }
    if(typeof object1 == "undefined"){
        return true;
    }
    if(object1 == null){
        return true;
    }
    if(typeof object1 == "string" || typeof object1 == "boolean" || typeof object1 == "symbol"){
        if(object1 === object2){
            return true;
        }

        return false;
    }

    return CompareObjects(object1, object2);
}
/**
 * @description This function compares two objects
 * @param object1 
 * @param object2 
 * @returns {Boolean}
 */
function CompareObjects(object1, object2){
    if(object1 instanceof Set)
    {
        if (object1.size !== object2.size) {
            return false;
          }
          object1.forEach((item) => {
            if (!object2.has(item)) {
              return false;
            }
          });
          
          return true;
    }
    if(object1 instanceof RegExp || object1 instanceof Error){
        if(object1.toString() == object2.toString()){
            return true;
        }

        return false;
    }
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);
    
    if (object1Keys.length !== object2Keys.length) {
        return false;
    }
    
    for (let i = 0; i < object1Keys.length; i += 1) {
        const key = object1Keys[i];
        if (!object2Keys.includes(key) || !isEqualFromLodash(object1[key], object2[key])) {
            return false;
        }    
    }
   
    return true; 
}

const isEqual = (object1, object2) => SameValueZero(object1, object2);  

console.log(isEqual(new Set([2]), new Set([5])));