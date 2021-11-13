import DeferOperator from './defer'

test('::foo :::bar ::::baz :defer', () => {
  const operator = new DeferOperator([
    { type: 'string', value: '::defer' },
    { type: 'string', value: ':::defer' },
    { type: 'string', value: '::::defer' },
  ])
  expect(operator.body()).toEqual({
    type: 'defer',
    value: [
      { type: 'string', value: ':::defer' },
      { type: 'string', value: '::defer' },
      { type: 'operator', value: 'defer' },
    ],
  })
})