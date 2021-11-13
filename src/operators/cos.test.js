import CosOperator from './cos'

test('30 :cos 0.15425144988758405 :eq', () => {
  const operator = new CosOperator([{ type: 'number', value: 30 }])
  expect(operator.body()).toEqual({ type: 'number', value: 0.15425144988758405 })
})