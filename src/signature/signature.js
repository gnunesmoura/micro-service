/**
 * signature to be used with any queue. the main idea is to send a json message
 * with 2 objects.
 * 
 * {
 *  "signature": {
 *    //signature object 
 *  },
 *  "body": {
 *    //body object
 *  }
 * }
 */

const joi = require('joi')

const signSchema = () => () => joi.object().keys({
  name: joi.string().min(1).required(),
  type: joi.number().required(),
  id: joi.number().min(0)
})

const buildSign = _signature => {
  return {
    name: _signature.name,
    type: _signature.type,
    id: _signature.id
  }
}

const sign = _signature => () => {
  const ret = buildSign(_signature)
  const valid = joi.validate(ret, _signature.schema())
  if (valid.error) throw valid.error
  return ret
}

const signature = () => {
  const _signature = {}
  _signature.sign = sign(_signature)
  _signature.schema = signSchema()
  return _signature
}

module.exports = signature
