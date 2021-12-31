
const standardizeInput = function (collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);


}

const myEach = function (collection, callback) {
    const newCollection = standardizeInput(collection);

    for (let idx = 0; idx < newCollection.length; idx++) {
        callback(newCollection[idx]);
    }

    return collection;
}


function myMap(collection, callback) {
    const newCollection = standardizeInput(collection);
    const newerCollection = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
        newerCollection.push(callback(newCollection[idx]));
    }

    return newerCollection;
}

const myReduce = function (collection, callback, acc) {
    let newCollection = standardizeInput(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    const len = newCollection.length;

    for (let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}


const myFind = function (collection, predicate) {
    const newCollection = standardizeInput(collection);

    for (let idx = 0; idx < newCollection.length; idx++) {
        if (predicate(newCollection[idx])) return newCollection[idx];
    }

    return undefined;
}

const myFilter = function (collection, predicate) {
    const newCollection = standardizeInput(collection);

    const newArr = [];

    for (let idx = 0; idx < newCollection.length; idx++) {
        if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }

    return newArr;
}


const mySize = function (collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
}

const myFirst = function (array, stop = false) {
    return (stop) ? array.slice(0, stop) : array[0]

}

const myLast = function (array, start = false) {
    return (start) ? array.slice(array.length - start, array.length) : array[array.length - 1]

}

function myKeys(object) {
    let keys = [];

    keys = Object.keys(object);
    return keys
}

function myValues(object) {
    let values = [];

    values = Object.values(object);
    return values
}