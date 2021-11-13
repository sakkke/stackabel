import RootOperator from './root'

test('64 2 :add 2 :eq', () => {
  const operator = new RootOperator([
    { type: 'number', value: 2 },
    { type: 'number', value: 64 },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 8 })
})