const repeatString = function(word, multiply) {
   
    if (multiply < 0) {
        return "ERROR"
    }

    let string = "";

    for (i = 0; i < multiply; i++){
     string += word;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
