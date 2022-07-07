/**
 * @constructor
 * @description creates object with methods add,substract,multiply, divide, which can be invoked in the chain style and a method calculate, which calculates the result
 * @param {Number} calculateValue
 * @returns {Object} 
 */
function Calculator(calculateValue){
    if(!new.target){
        throw new Error("Функция-конструктор должна вызываться через new");
    }

    let expression = [calculateValue];

    this.add = (number) => {
        expression.push('+');
        expression.push(number);
        return this;
    }  
    this.substraсt = (number) => {
        expression.push('-');
        expression.push(number);
        return this;
    }
    this.multiply = (number) => {
        expression.push('*');
        expression.push(number);
        return this;
    }
    this.divide = (number) => {
        expression.push('/');
        expression.push(number);
        return this;
    }

    const allOperations = ["+", "-", "*", "/"];
    const highPriorityOperations = ["*", "/"];

    this.calculation = () => {
        var polishRecord = createPolishRecord();
        return readPolishRecord(polishRecord.polishStack, polishRecord.polishString);
    }

    
    /**
     *@description This method creates a Polish record from expression to calculate
     *@returns {Object} object has to fields polishString and polishStack
     */
    function createPolishRecord(){
        var polishString = new Array;
        var polishStack = new Array;
        let stringId = -1;
        let stackId = -1;
        for (let i = 0; i < expression.length; i++) {                // формируем обратную польскую запись
            switch (expression[i]) {
             case "+":
             case "-":
                 while (stackId >= 0 && (allOperations.includes(polishStack[stackId]))) {
                     stringId++;
                     polishString[stringId] = polishStack[stackId];
                     stackId--;
                 }
                 stackId++;
                 polishStack[stackId] = expression[i];
                 break;
             
             case "*":
             case "/":
                 while (stackId >= 0 && (highPriorityOperations.includes(polishStack[stackId]))) {
                     stringId++;
                     polishString[stringId] = polishStack[stackId];
                     stackId--;
                 }
                 stackId++;
                 polishStack[stackId] = expression[i];
                break;
            
            default:
                stringId++;
                polishString[stringId] = expression[i];
          }
       }

       while (stackId >= 0) {
           stringId++;
           polishString[stringId] = polishStack[stackId];
           stackId--;
       }

       return {polishString, polishStack};
    }

    /**
     * @description This method reads polish record and return a result of calculated expression
     * @param {Array} polishStack 
     * @param {Array} polishString 
     * @returns {Number}
     */
    function readPolishRecord(polishStack, polishString){
        let stackId = -1;                                                  
       
        for (let i = 0; i < expression.length; i++ ) {
            switch (polishString[i]) {
                case "+":                
                    stackId--;
                    polishStack[stackId] = polishStack[stackId] + polishStack[stackId + 1];
                    break;
                case "-":
                    stackId--;
                    polishStack[stackId] = polishStack[stackId] - polishStack[stackId + 1];
                    break;
                case "*":
                    stackId--;
                    polishStack[stackId] = polishStack[stackId] * polishStack[stackId + 1];
                    break;
                case "/":
                    stackId--;
                    polishStack[stackId] = polishStack[stackId] / polishStack[stackId + 1];
                    break;
                default:
                    stackId++;
                    polishStack[stackId] = parseFloat(polishString[i]);
           }
       }

       return polishStack[stackId];
    }
}
var calc = new Calculator(5);
calc.add(3).multiply(5).divide(2).substraсt(4).multiply(2);

console.log(calc.calculation());