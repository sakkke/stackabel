import Parser from '../../core/parser'
import CloneOperator from './clone'

test('1 :push :clone', () => {
  const parser = new Parser('1 :clone')
  parser.eval()
  expect(parser.stack).toEqual([
    { type: 'number', value: 1 },
    { type: 'number', value: 1 },
  ])
})

test('operator', () => {
  const operator = new CloneOperator()
  operator.stack.push({ type: 'number', value: 1 })
  expect(operator.body()).toEqual({ type: 'number', value: 1 })
})