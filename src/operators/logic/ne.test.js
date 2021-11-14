import NeOperator from './ne'

test('1 1 :ne', () => {
  const operator = new NeOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: false })
})

test('2 1 :ne', () => {
  const operator = new NeOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})