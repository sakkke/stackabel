import GeOperator from './ge'

test('1 1 :ge', () => {
  const operator = new GeOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})

test('2 1 :ge', () => {
  const operator = new GeOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: false })
})

test('1 2 :ge', () => {
  const operator = new GeOperator([
    { type: 'number', value: 2 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})