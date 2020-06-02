const core = require('@actions/core')

const {
  DEFAULT_ACTUAL,
  DEFAULT_ASSERTION,
  DEFAULT_EXPECTED,
} = require('./constants')

/**
 * Returns the specified value of assertion
 */
const getAssertion = () => {
  return core.getInput('assertion') || DEFAULT_ASSERTION
}

/**
 * Returns the specified value of actual
 */
const getActual = () => {
  return core.getInput('actual') || DEFAULT_ACTUAL
}

/**
 * Returns the specified value of expected
 */
const getExpected = () => {
  return core.getInput('expected') || DEFAULT_EXPECTED
}

/**
 * Sets the Github Action to fail
 * @param {string} message
 */
const throwGithubError = (message) => {
  core.setFailed(`:crying_cat_face: ${message}`)
}

module.exports = {
  throwGithubError,
  getActual,
  getAssertion,
  getExpected,
}
