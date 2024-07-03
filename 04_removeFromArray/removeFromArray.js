const removeFromArray = function(array) {

    let filteredArray = [];
   const argsArray = Array.from(arguments);

   for (let i = 0; i <= (array.length - 1); i++) {
        let k = 0;
        for (j = 1; j <= (argsArray.length); j++) {
            if (array[i] === argsArray[j]) {
                k++;
            }
        }
        if (k === 0) {
            filteredArray.push(array[i]);
        }
   }
   return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
