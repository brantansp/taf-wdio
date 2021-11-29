const person = require("./parent")

class pet extends person {

    get gender () {
        return 'female'
    }

    constructor (first, last) {
        super(first,last)
    }

}

let dog = new pet('jack','jicky')

console.log(dog.gender)
console.log(dog.fullname())

