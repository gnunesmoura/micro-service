const expect = require('chai').expect
const signature = require('./signature')

const throwsWithMessage = message => func => {
  try {
    func()
  } catch (err) {
    expect(err.message).to.be.equal(message)
  }
}

describe('signature', () => {
  it('it shoud throw an error if name isn\'t provided', () => {
      throwsWithMessage('child "name" fails because ["name" is required]')
        (signature().sign)
  })
})