import NotOperator from './not'

test('true :not', () => {
  const operator = new NotOperator([{ type: 'boolean', value: true }])
  expect(operator.body()).toEqual({ type: 'boolean', value: false })
})

test('false :not', () => {
  const operator = new NotOperator([{ type: 'boolean', value: false }])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})