function reverseNumber(number) {
    let resultat = "";
    let signOfNumber = "";
    let end = 0;
    number = number + "";
    
    if(number[0] === "-") {
        signOfNumber = "-";
        end = 1;
    }

    for(let i = number.length - 1; i >= end; i--) {
        resultat = resultat + number[i];
    }
    return +(signOfNumber + resultat);
}

console.log(reverseNumber(-5.44));