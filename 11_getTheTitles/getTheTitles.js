const getTheTitles = function(arr) {
    let titleArr = [];
    arr.forEach((item)=> {
        titleArr.push(item.title);
    })
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
