const chai = require('chai')
// eslint-disable-next-line no-unused-vars
const should = chai.should()

/**
 * Makes a specified assertion over an expected an an actual
 * @param {String} assertion - to be performed
 * @param {Any} expected
 * @param {Any} actual
 * @returns {Object} with pass/fail and message
 */
const assert = (assertion, expected, actual) => {
  try {
    switch (assertion) {
      case 'should.equal':
        actual.should.equal(expected)
        break
      case 'should.not.equal':
        actual.should.not.equal(expected)
        break
      default:
        throw Error('Assertion Not In Dictionary')
    }
    return { asserted: true, message: ':heart_eyes_cat: Test Passed' }
  } catch (e) {
    return { asserted: false, message: e.message }
  }
}

module.exports = {
  assert,
}
