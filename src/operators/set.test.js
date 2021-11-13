import Parser from '../core/parser'
import SetOperator from './set'

test('42 a :set', () => {
  const parser = new Parser('42 a :set')
  parser.eval()
  expect(parser.namespace.get('a')).toEqual({ type: 'number', value: 42 })
})

test('operator', () => {
  const operator = new SetOperator([
    { type: 'string', value: 'a' },
    { type: 'number', value: 42 },
  ])
  expect(operator.body()).toBe(undefined)
  expect(operator.namespace.get('a')).toEqual({ type: "number", value: 42 })
})