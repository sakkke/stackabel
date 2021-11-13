import PowOperator from './pow'

test('2 4 :pow 32 :eq', () => {
  const operator = new PowOperator([
    { type: 'number', value: 2 },
    { type: 'number', value: 4 },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 16 })
})