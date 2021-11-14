import Parser from '../../core/parser'
import CloneOperator from './clone'

test('1 :push :clone', () => {
  const parser = new Parser('1 :push :clone')
  parser.eval()
  expect(parser.stack).toEqual([{ type: 'number', value: 1 }])
  expect(parser.substack).toEqual([{ type: 'number', value: 1 }])
})

test('operator', () => {
  const operator = new CloneOperator()
  operator.substack.push({ type: 'number', value: 1 })
  expect(operator.body()).toEqual({ type: 'number', value: 1 })
  expect(operator.substack).toEqual([{ type: 'number', value: 1 }])
})