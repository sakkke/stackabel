import AddOperator from './add'

test('1 1 :add 2 :eq', () => {
  const operator = new AddOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 2 })
})