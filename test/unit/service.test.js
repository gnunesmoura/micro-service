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

  it('a service shoud work with inputChanel returning a basic type or a Promise',
    done => {
      const inputFunction = () => 'input'
      const inputPromise = () => new Promise((resolve, reject) => resolve('input'))
      const task = input => input + ' task done'
      const service1 = serviceBuilder()
        .addInputChanel(inputFunction)
        .addTask(task)
        .build()

      const service2 = serviceBuilder()
        .addInputChanel(inputPromise)
        .addTask(task)        
        .build()

      service1()
        .then(res => {
          expect(res).to.be.equal('input task done')
          return service2()
        })
        .then(res => {
          expect(res).to.be.equal('input task done')
        })
        .then(done)
        .catch(done)
    })

  it(`a producer shoud only use the outputChanel if the task returns something`,
    done => {
      const task = () => 'task'
      const outputChanel = output => output + ' output'
      const service1 = serviceBuilder()
        .addOutputChanel(outputChanel)
        .addTask(task)
        .build()

      const returnUndefined = () => undefined
      const service2 = serviceBuilder()
        .addOutputChanel(outputChanel)
        .addTask(returnUndefined)
        .build()

      service1()
        .then(response => {
          expect(response).to.be.equal('task output')
        })
        .then(response => service2())
        .then(response => {
          expect(response).to.be.equal('tas')
        })
        .then(done)
        .catch(done)

    })
})