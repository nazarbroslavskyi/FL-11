let data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      " birthday ": '2016-03-18T00:00:00',
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      " birthday ": '1991-02-11T00:00:00',
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      " birthday ": '1984-04-17T00:00:00',
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      " birthday ": '1994-04-17T00:00:00',
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ]
  

function getNumbers(string) {
    let arr = [];
    for(let i = 0; i < string.length; i++) {
        if(parseInt(string[i]) || +string[i] === 0) {
            arr.push(+string[i]);
        }
    }
    return arr;
}

// console.log(getNumbers('f5rgh05gt0t43-14gtr0g0t4gbt'));


function findTypes(...a) {
    let obj = {};
    for(let i = 0; i < a.length; i++) {
        if(obj.hasOwnProperty(typeof a[i])) {
            obj[typeof a[i]]++;
        } else {
            obj[typeof a[i]] = 1;
        }
    }

    return obj;
}

// console.log(findTypes(1, 3, 3, 3, null, NaN, undefined, 'hello')) // for testing


function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

// executeforEach([1, 2, 3, 4, 5], (el) => {
//     console.log(el)
// });

function mapArray(arr, func) {
    let result = [];
        executeforEach(arr, (el) => {
            result.push(func(el))
        })
    return result;
}


// console.log(mapArray([2, 5, 8], function(el) { return el + 3 }))


function filterArray(arr, func) {
    let result = [];
    executeforEach(arr, (el) => {
        if(func(el)) {
            result.push(el);
        }
    })    
    return result;
}


// console.log(filterArray([2, 5, 8], function(el) { return el > 3 }))

function showFormattedDate(date) {
    const options = {
        month: 'short'
    }
    const month = date.toLocaleDateString('en-US', options);
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `Date: ${month} ${dayOfMonth} ${year}`;

}

// console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function canConvertToDate(date) {
    return !!Date.parse(date);
}

// console.log(canConvertToDate(`2016-13-18T00:00:00`));

function daysBetween(dateOne, dateTwo) {
    const milisecondsInDay = 86400000;
    return Math.round((dateTwo.getTime() - dateOne.getTime()) / milisecondsInDay); 
}

// console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

function getAmountOfAdultPeople(data) {
    let daysInEightingYears = 6570;
    let arr = [];
    filterArray(data, function(el) {
        if(daysBetween(new Date(el[' birthday ']), new Date()) >= daysInEightingYears) {
             arr.push(el);
        }
    })
    return arr.length;
}

// console.log(getAmountOfAdultPeople(data))


function keys(obj) {
	let arrayOfKeys = [];
	for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            arrayOfKeys.push(key);
        }
	}
	return arrayOfKeys;
}

// console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

function values(obj) {
	let arrayValuesOfObj = [];
	for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
		arrayValuesOfObj.push(obj[key]);
        }
	}
	return arrayValuesOfObj;
}

// console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));