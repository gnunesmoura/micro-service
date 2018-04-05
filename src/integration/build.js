/**
 * module that takes a builder and return a function that build a service.
 */

const service = builder => () => () => builder.service.inputChanel()
  .then(builder.service.task)
  .then(builder.service.outputChanel)

module.exports = builder => service(builder)