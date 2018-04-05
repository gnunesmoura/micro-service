const expect = require('chai').expect
const mocha = require('mocha')
const build = require('./../../src/integration/build')
const serviceBuilder = require('./../../src/integration/service-builder')
const service = require('./../../src/integration/service')

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
    console.log(typeof serv())
    expect(typeof serv()).to.be.equal('object')
  })
})
describe('serviceBuilder', () => {
  it('shoud return a builder with addInputChanel that returns the builder', () => {
    const builder = serviceBuilder()
    expect(builder.addInputChanel()).to.be.equal(builder)
  })

  it('shoud return a builder with addOutputChanel that returns the builder', () => {
    const builder = serviceBuilder()
    expect(builder.addOutputChanel()).to.be.equal(builder)
  })

  it('shoud return a builder with addTask that returns the builder', () => {
    const builder = serviceBuilder()
    expect(builder.addTask()).to.be.equal(builder)
  })

  it('shoud return a builder with a function build', () => {
    const builder = serviceBuilder()
    expect(typeof builder.build).to.be.equal('function')
  })

  it('build shoud return a function that returns a promise', () => {
    const service = serviceBuilder().build()
    expect(typeof service).to.be.equal('function')

  })
})
