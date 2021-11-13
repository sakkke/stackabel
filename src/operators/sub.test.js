import SubOperator from './sub'

test('1 11 :sub 10 :eq', () => {
  const operator = new SubOperator([
    { type: 'number', value: 11 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 10 })
})