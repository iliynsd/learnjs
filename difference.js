function getDifferentElements(mas, values){
    let result = [];
    for(let element of mas){
        if(!values.includes(element)){
            result.push(element);
        }
    }
    
    return result;
}

console.log(getDifferentElements([1,'2',4,5,6,7,2,1,'g','a'], ['2',1,3,4,6,7]));