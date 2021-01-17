const chai = require('chai')
should = chai.should()
expect = chai.expect
assert = chai.assert

describe('My First test', function(){

before(function(){
    console.log('Before')
})

after(function(){
    console.log('after')
})

beforeEach(function(){
    console.log('beforeEach')
})

afterEach(function(){
    console.log('afterEach')
})

    let name = 'Aaron'
    it('should be a string', function(){
        name.should.be.a('String')
        expect(name).to.be.a('string')
        assert.typeOf(name,'string')
    })

})