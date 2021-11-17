import PrintOperator from './clone'

test('ok :print', () => {
  const operator = new PrintOperator({ type: 'string', value: 'ok' })
  expect(operator.body()).toBe(undefined)
})