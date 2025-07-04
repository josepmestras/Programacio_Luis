function cortaArray(array, desde) {
    let result = [];

    for(let i = desde; i < array.length; i++){
        result[result.length] = array[i];
    }

    return result;
}

console.log(cortaArray([1, 2, 3], 1));