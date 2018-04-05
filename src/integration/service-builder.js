const build = require('./build')
const basicService = require('./service').basicService

const addInputChanel = builder => inputChanel => {
  builder.service.inputChanel = () => new Promise(resolve => resolve(inputChanel()))
  return builder
}

const addOutputChanel = builder => outputChanel => {
  builder.service.outputChanel = output => output ? outputChanel(output) : output
  return builder
}

const addTask = builder => task => {
  builder.service.task = task
  return builder
}

const serviceBuilder = () => {
  const builder = { service: basicService() }

  builder.addInputChanel = addInputChanel(builder)
  builder.addTask = addTask(builder)
  builder.addOutputChanel = addOutputChanel(builder)

  builder.build = build(builder)

  return builder
}


module.exports = serviceBuilder
