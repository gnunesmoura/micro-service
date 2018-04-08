const expect = require('chai').expect

const build = require('./build')
const service = require('./service')

describe('build', () => {
  let buildService, serv
  it('shoud return a function that returns a function', () => {
    buildService = build({
      service: service.basicService()
    })

    expect(typeof buildService).to.be.equal('function')
    serv = buildService()
    expect(typeof serv).to.be.equal('function')
  })

  it('the second function that it returns shoud return a promise', () => {
    expect(typeof serv()).to.be.equal('object')
  })
})
