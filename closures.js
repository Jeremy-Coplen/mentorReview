function name(firstname) {
    let name = `your name is ${firstname}`
    return function(lastname) {
        return `${name} ${lastname}`
    }
}

let jeremy = name("Jeremy")
console.log(jeremy)
console.log(jeremy("Coplen"))

function bank() {
    balance = 0
    return function() {
        return balance++
    }
}

let account1 = bank()
console.log(account1)
console.log(account1())
console.log(account1())
let account2 = bank()
console.log(account2())