require('dotenv').config()
const { throwGithubError, getAssertion, getExpected, getActual } = require('../infrastructure/github-actions')
const { assert } = require('../domain/assertions')

const main = () => {
  console.log('🐈 Running gat! Meow!')
  const assertion = getAssertion()
  const expected = getExpected()
  const actual = getActual()

  if (actual && expected && assertion) {
    const result = assert(assertion, expected, actual)
    if (result.asserted) console.log(result.message)
    else throwGithubError(result.message)
  } else throwGithubError('Missing one of the inputs')
}

main()
