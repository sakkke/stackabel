import LtOperator from './lt'

test('2 1 :lt', () => {
  const operator = new LtOperator([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: true })
})

test('1 2 :lt', () => {
  const operator = new LtOperator([
    { type: 'number', value: 2 },
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual({ type: 'boolean', value: false })
})