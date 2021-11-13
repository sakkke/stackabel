import MulOperator from './mul'

test('8 4 :mul 32 :eq', () => {
  const operator = new MulOperator([
    { type: 'number', value: 4 },
    { type: 'number', value: 8 },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 32 })
})