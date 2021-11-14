import GtOperator from './gt'

test('2 1 :gt', () => {
  const operator = new GtOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: false })
})

test('1 2 :gt', () => {
  const operator = new GtOperator([
    { type: 'number', value: 2 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})