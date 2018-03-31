const expect = require('chai').expect
const mocha = require('mocha')
const serviceBuilder = require('./../../src/integration/service-builder')

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
})
