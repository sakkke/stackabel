import RunOperator from './run'

test('1 1 :add 2 :eq', () => {
  const operator = new RunOperator([
    {
      type: 'defer',
      value: [
        { type: 'number', value: 1 },
        { type: 'number', value: 1 },
        { type: 'operator', value: 'add' },
      ],
    },
  ])
  expect(operator.body()).toEqual({ type: 'number', value: 2 })
})