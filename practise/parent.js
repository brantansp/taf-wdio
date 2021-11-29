class person {

    age = '21'

    constructor (first, last) {
        this.firstname = first
        this.lastname = last
    }

    get gender () {
        return 'male'
    }

    fullname () {
        return this.firstname + ' ' + this.lastname
    }




}



module.exports = person;