import LeOperator from './le'

test('1 1 :le', () => {
  const operator = new LeOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})

test('2 1 :le', () => {
  const operator = new LeOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})

test('1 2 :le', () => {
  const operator = new LeOperator([
    { type: 'number', value: 2 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: false })
})