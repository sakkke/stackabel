import DropOperator from './drop'

test('1 :drop', () => {
  const operator = new DropOperator([
    { type: 'number', value: 1 },
  ])
  expect(operator.body()).toEqual(undefined)
})