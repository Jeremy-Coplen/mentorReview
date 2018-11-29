let array = [1, 2, 3]

function logger(elem, index) {
    console.log(index, elem)
}

function looper(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i], i)
    }
}

let newArr = array.filter((elem) => elem > 1)
console.log(newArr)