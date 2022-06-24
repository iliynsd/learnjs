function getUnique(mas){
    let uniqueMas = [];
    for (let element of mas) {
        if(!uniqueMas.includes(element))
        {
            uniqueMas.push(element);
        }
    }

    return uniqueMas;
}

function swap(mas, firstIndex, secondIndex){
    let temp = mas[firstIndex];
    mas[firstIndex] = mas[secondIndex];
    mas[secondIndex] = temp;
}

function bubbleSortMas(mas){
    for(let j = 0; j < mas.length; j++){
        for(let i =0; i < mas.length; i++){
            if(mas[i] > mas[i+1]){
                swap(mas, i, i+1);
            }
        }
    }

    return mas;
}

function sortedUniqFromLodash(mas){
    return bubbleSortMas(getUnique(mas));
}

console.log(sortedUniqFromLodash([1,2,3,1,2,7,5,3,6,83,2]));