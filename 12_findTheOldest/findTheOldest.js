const findTheOldest = function(arr) {
    if (! arr[0].yearOfDeath) {
        arr[0].yearOfDeath = new Date().getFullYear();
    }
    let oldest = arr[0];
    arr.forEach((item) => {
        if (! item.yearOfDeath) {
            item.yearOfDeath = new Date().getFullYear();
        }
        if ((item.yearOfDeath - item.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
            oldest = item;
        }
    })
    return oldest;
  };

// Do not edit below this line
module.exports = findTheOldest;
