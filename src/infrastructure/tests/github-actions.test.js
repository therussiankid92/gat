jest.mock('@actions/core')

describe('getActual', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('should return value of actual if exists', () => {
    jest.mock('../constants', () => ({ DEFAULT_ACTUAL: 'true' }))
    // eslint-disable-next-line global-require
    const { getActual } = require('../github-actions')
    expect(getActual()).toEqual('true')
  })
})

describe('getExpected', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('should return value of expected if exists', () => {
    jest.mock('../constants', () => ({ DEFAULT_EXPECTED: 'true' }))
    // eslint-disable-next-line global-require
    const { getExpected } = require('../github-actions')
    expect(getExpected()).toEqual('true')
  })
})

describe('getAssertion', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('should return value of assertion if exists', () => {
    jest.mock('../constants', () => ({ DEFAULT_ASSERTION: 'true' }))
    // eslint-disable-next-line global-require
    const { getAssertion } = require('../github-actions')
    expect(getAssertion()).toEqual('true')
  })
})

describe('throwGithubError', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('should throw github error', () => {
    // eslint-disable-next-line global-require
    const { throwGithubError } = require('../github-actions')
    // eslint-disable-next-line global-require
    const core = require('@actions/core')
    throwGithubError('message')
    expect(core.setFailed).toHaveBeenCalledWith('😿 message')
  })
})
