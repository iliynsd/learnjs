function isEqualFromLodash(object1, object2){

    if (object1 === object2) {
        return true;  
    }
        
    if (object1 === null || object2 === null || typeof object1 !== 'object' || typeof object2 !== 'object') {
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

console.log(isEqualFromLodash({a:1,e:2,r:'e'}, {a:1,r:'e',e:2}));