import SinOperator from './sin'

test('30 :sin -0.9880316240928618 :eq', () => {
  const operator = new SinOperator([{ type: 'number', value: 30 }])
  expect(operator.body()).toEqual({ type: 'number', value: -0.9880316240928618 })
})