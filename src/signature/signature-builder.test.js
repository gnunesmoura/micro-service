const expect = require('chai').expect
const signatureBuilder = require('./signature-builder')

describe(`signature builder`,
  () => {
    it(`shoud create a signature with the method sign`,
      () => {
        const signature = signatureBuilder().min().build()
        expect(signature.sign()).to.not.be.equal(undefined)
      })
  })