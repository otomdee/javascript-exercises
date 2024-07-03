const sumAll = function() {
    const args = Array.from(arguments);
    let first;
    let second;
    if (args[1] > args[0]) {
       first = args[0];
       second = args[1];
     }
     else if (args[0] >= args[1]) {
       second = args[0];
       first = args[1];
     }
    distance = (second - first);

    let finalSum = first;
   for (let i = 1; i <= distance; i++) {
       finalSum += first + i;
   }

   return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
