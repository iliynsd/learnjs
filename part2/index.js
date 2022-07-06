function Calculator(calculateValue){
    if(!new.target){
        throw new Error("Функция-конструктор должна вызываться через new");
    }

    let expression = [calculateValue];

    
    this.add = (number) => {
        expression.add('+');
        expression.add(number);
        return this;
    }  
    this.substraсt = (number) => {
        expression.add('-');
        expression.add(number);
        return this;
    }
    this.multiply = (number) => {
        expression.add('*');
        expression.add(number);
        return this;
    }
    this.divide = (number) => {
        expression.add('/');
        expression.add(number);
        return this;
    }
}

var calc = new Calculator(5);

var calcString = ""
     function calculation(buffString) {
         var polishString = new Array;
         var polishStack = new Array;
         var stringId = -1;
         var stackId = -1;
         for (var i = 0; i < buffArray.length; i++) {                // формируем обратную польскую запись
             switch (buffArray[i]) {
              case "+":
                  while (stackId >= 0 && (polishStack[stackId] == "+" || polishStack[stackId] == "-" || polishStack[stackId] == "*" || polishStack[stackId] == "/")) {
                      stringId++;
                      polishString[stringId] = polishStack[stackId];
                      stackId--;
                  }
                  stackId++;
                  polishStack[stackId] = buffArray[i];
                  break;
              case "-":
                  while (stackId >= 0 && (polishStack[stackId] == "+" || polishStack[stackId] == "-" || polishStack[stackId] == "*" || polishStack[stackId] == "/")) {
                      stringId++;
                      polishString[stringId] = polishStack[stackId];
                      stackId--;
                  }
                  stackId++;
                  polishStack[stackId] = buffArray[i];
                  break;
              case "*":
                  while (stackId >= 0 && (polishStack[stackId] == "*" || polishStack[stackId] == "/")) {
                      stringId++;
                      polishString[stringId] = polishStack[stackId];
                      stackId--;
                  }
                  stackId++;
                  polishStack[stackId] = buffArray[i];
                 break;
             case "/":
                 while (stackId >= 0 && (polishStack[stackId] == "*" || polishStack[stackId] == "/")) {
                     stringId++;
                     polishString[stringId] = polishStack[stackId];
                     stackId--;
                 }
                 stackId++;
                 polishStack[stackId] = buffArray[i];
                 break;
             default:
                 stringId++;
                 polishString[stringId] = buffArray[i];
           }
        }
        while (stackId >= 0) {
            stringId++;
            polishString[stringId] = polishStack[stackId];
            stackId--;
        }                                                                  // польская запись готова
     //   alert(polishString);
        stackId = -1;                                                      // Начинаем считать по польской записи
        var stringIdMax = stringId;

        for (stringId = 0; stringId <= stringIdMax; stringId++ ) {
            switch (polishString[stringId]) {
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
                    polishStack[stackId] = parseFloat(polishString[stringId]);
            }
        }
        return polishStack[stackId];
     }

     console.log(calculation("1 + 2 * 3 / (4+5) * (6+7)"));