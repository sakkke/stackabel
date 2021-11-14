import PushOperator from './push'

test('1 :push', () => {
  const operator = new PushOperator([{ type: 'number', value: 1 }])
  operator.body()
  expect(operator.substack).toEqual([{ type: 'number', value: 1 }])
})