const signature = require('./signature')

const withId = builder => id => {
  builder.signature.id = id
  builder.id = id
  return builder
}

const withName = builder => name => {
  builder.signature.name = name
  return builder
}

const build = builder => () => {
  return builder.signature
}

const min = builder => () => {
  builder.signature.id = parseInt((Math.random() * 10000).toString().slice(5, 12))
  builder.signature.name = builder.signature.id.toString()
  builder.signature.type = 200
  return builder
}

const signatureBuilder = () => {
  const builder = {}

  builder.signature = signature()
  builder.withName = withName(builder)
  builder.withId = withId(builder)
  builder.min = min(builder)
  builder.build = build(builder)
  
  return builder
}

module.exports = signatureBuilder
