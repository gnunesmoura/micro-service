const errors = require('./errors')

const serviceBuilder = () => {
  const builder = {}

  builder.build = () => {
    return () => builder.inputChanel()
      .then(rec => {
        if (!rec) throw new Error(errors.noMessage)
        return rec
      })
      .then(rec => builder.task ? builder.task(rec) : rec)
      .then(rec => builder.outputChanel ? builder.outputChanel(rec) : rec)
      .catch(err => {
        const normalError = Object.keys(errors).find(key => errors[key] === err.message)
        if (!normalError) throw err
      })
  }

  builder.addInputChanel = inputChanel => {
    builder.inputChanel = inputChanel
    return builder
  }

  builder.addOutputChanel = outputChanel => {
    builder.outputChanel = outputChanel
    return builder
  }

  builder.addTask = task => {
    builder.task = task
    return builder
  }

  return builder
}

module.exports = serviceBuilder