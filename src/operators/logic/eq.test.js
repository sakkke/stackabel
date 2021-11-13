import EqOperator from './eq'

test('1 1 :eq', () => {
  const operator = new EqOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})

test('2 1 :eq', () => {
  const operator = new EqOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: false })
})