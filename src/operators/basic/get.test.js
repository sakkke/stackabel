import Parser from '../../core/parser'
import GetOperator from './get'

test('42 a :set a :get', () => {
  const parser = new Parser('42 a :set a :get')
  parser.eval()
  expect(parser.stack).toEqual([{ type: 'number', value: 42 }])
})

test('operator', () => {
  const operator = new GetOperator([{ type: 'string', value: 'a' }])
  operator.namespace.set('a', 42)
  expect(operator.body()).toBe(42)
})