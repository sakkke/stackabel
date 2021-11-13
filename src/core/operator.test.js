import Operator from './operator'

test('to be undefined', () => {
  const operator = new Operator()
  expect(operator.body()).toBe(undefined)
})