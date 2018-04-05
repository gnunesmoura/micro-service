const expect = require('chai').expect
const signature = require('./signature')

describe('signature', () => {
  it('it shoud throw an error if id isn\'t provided', () => {
    expect(signature()).to.throw('')
  })
})