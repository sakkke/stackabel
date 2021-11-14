import IfOperator from './if'

test('1 0 true :if', () => {
  const operator = new IfOperator([
    {
      type: 'defer',
      value: [{ type: 'boolean', value: true }],
    },
    {
      type: 'defer',
      value: [{ type: 'number', value: 0 }],
    },
    {
      type: 'defer',
      value: [{ type: 'number', value: 1 }],
    },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 0 })
})

test('1 0 false :if', () => {
  const operator = new IfOperator([
    {
      type: 'defer',
      value: [{ type: 'boolean', value: false }],
    },
    {
      type: 'defer',
      value: [{ type: 'number', value: 0 }],
    },
    {
      type: 'defer',
      value: [{ type: 'number', value: 1 }],
    },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 1 })
})