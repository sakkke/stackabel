import TanOperator from './tan'

test('30 :tan -6.405331196646276 :eq', () => {
  const operator = new TanOperator([{ type: 'number', value: 30 }])
  expect(operator.body()).toEqual({ type: 'number', value: -6.405331196646276 })
})