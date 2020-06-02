const { assert } = require('../assertions')
describe('assert', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('should.equal: should return true if actual and expected equal', () => {
    expect(assert('should.equal', 'true', 'true')).toEqual({ asserted: true, message: ':heart_eyes_cat: Test Passed' })
  })
  it('should.equal: should return false if actual and expected not equal', () => {
    expect(assert('should.equal', 'true', 'false')).toEqual({ asserted: false, message: "expected 'false' to equal 'true'" })
  })
  it('should.not.equal: should return true if actual and expected not equal', () => {
    expect(assert('should.not.equal', 'true', 'false')).toEqual({ asserted: true, message: ':heart_eyes_cat: Test Passed' })
  })
  it('should return false if assertion not defined', () => {
    expect(assert('should.gat', 'true', 'false')).toEqual({ asserted: false, message: 'Assertion Not In Dictionary' })
  })
})
