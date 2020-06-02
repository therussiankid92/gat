const { assert } = require('../assertions')
describe('assert', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  const caseTrue = { asserted: true, message: '😻 Test Passed' }
  const caseFalse = { asserted: false, message: "expected 'false' to equal 'true'" }
  const caseAsertionNotInDict =
  it('should.equal: should return true if actual and expected equal', () => {
    expect(assert('should.equal', 'true', 'true')).toEqual(caseTrue)
  })
  it('should.equal: should return false if actual and expected not equal', () => {
    expect(assert('should.equal', 'true', 'false')).toEqual(caseFalse) })
  it('should.not.equal: should return true if actual and expected not equal', () => {
    expect(assert('should.not.equal', 'true', 'false')).toEqual(caseTrue)
  })
  it('should return false if assertion not defined', () => {
    const caseAsertionNotInDict = { asserted: false, message: "Assertion Not In Dictionary" }
        expect(assert('should.gat', 'true', 'false')).toEqual(caseAsertionNotInDict)
  })
})
