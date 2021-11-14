import SqrtOperator from './sqrt'

test('2 :sqrt 1.4142135623730951 :eq', () => {
  const operator = new SqrtOperator([{ type: 'number', value: 2 }])
  expect(operator.body()).toEqual({ type: 'number', value: 1.4142135623730951 })
})