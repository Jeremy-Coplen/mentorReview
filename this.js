class Jacket {
    constructor(owner, color, size) {
        this.owner = owner
        this.color = color
        this.size = size
    }
}

let jacket1 = new Jacket("Jeremy", "grey", "medium")
let jacket2 = new Jacket("Beth", "black", "medium")

console.log(jacket1)
console.log(jacket2)

jacket1.size = "small"

console.log(jacket1.size)
console.log(jacket2.size)