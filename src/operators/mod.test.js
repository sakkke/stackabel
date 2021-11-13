import ModOperator from './mod'

test('3 8 :mod 2 :eq', () => {
  const operator = new ModOperator([
    { type: 'number', value: 8 },
    { type: 'number', value: 3 },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 2 })
})