let trueCondition = true;
let aX, aY, bX, bY, cX, cY, dataValid;
let two = 2;

while(trueCondition) {
    aX = parseFloat(+prompt('enter the coordinates of the point A \n x = ',''));
    if(!aX && isFinite(aX)) {
        console.log(`Sorry, but you did not enter the number.
        Reload page and try again`);
        break;
    }

    aY = parseFloat(+prompt('enter the coordinates of the point A \n y =  ',''));
    if(!aY) {
        console.log(`Sorry, but you did not enter the number.
        Reload page and try again`);
        break;
    }

    bX = parseFloat(+prompt('enter the coordinates of the point B \n x = ',''));
    if(!bX) {
        console.log(`Sorry, but you did not enter the number.
        Reload page and try again`);
        break;
    }

    bY = parseFloat(+prompt('enter the coordinates of the point B \n y = ',''));
    if(!bY) {
        console.log(`Sorry, but you did not enter the number.
        Reload page and try again`);
        break;
    }

    cX = parseFloat(+prompt('enter the coordinates of the point C \n x = ',''));
    if(!cX) {
        console.log(`Sorry, but you did not enter the number.
        Reload page and try again`);
        break;
    }

    cY = parseFloat(+prompt('enter the coordinates of the point C \n y =',''));
    if(!cY) {
        console.log(`Sorry, but you did not enter the number.
        Reload page and try again`);
        break;
    }
    dataValid = true;
    break;
}

if((aX + bX) / two === cX && (bY + aY) / two === cY && dataValid) {
    console.log(true);
} else if(dataValid) {
    console.log(false);
}

