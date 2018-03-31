const expect = require('chai').expect
const mocha = require('mocha')
const serviceBuilder = require('./../../src/integration/service-builder')

describe('service', () => {
  it(`a service only with input shoud return undefined if no message where 
  recieved, or a thenable object that recieves the input`,
    done => {
      const input1 = () => new Promise((resolve, reject) => resolve())
      const service1 = serviceBuilder()
        .addInputChanel(input1)
        .build()

      const input2 = () => new Promise((resolve, reject) => resolve('input'))
      const service2 = serviceBuilder()
        .addInputChanel(input2)
        .build()

      service1()
        .then(response => {
          expect(response).to.be.equal(undefined)
        })
        .then(response => service2())
        .then(response => {
          expect(response).to.be.equal('input')
        })
        .then(done)
        .catch(done)
    })
})