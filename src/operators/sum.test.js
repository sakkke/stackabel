import SumOperator from './sum'

test('1 2 3 4 5 6 7 8 9 :sum 45 :eq', () => {
  const operator = new SumOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'number', value: 8 },
    { type: 'number', value: 9 },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 45 })
})