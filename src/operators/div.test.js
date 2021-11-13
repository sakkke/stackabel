import DivOperator from './div'

test('8 32 :mul 4 :eq', () => {
  const operator = new DivOperator([
    { type: 'number', value: 32 },
    { type: 'number', value: 8 },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 4 })
})