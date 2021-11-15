import Parser from '../../core/parser'
import PopOperator from './pop'

test('1 :push :pop', () => {
  const parser = new Parser('1 :push :pop')
  parser.eval()
  expect(parser.stack).toEqual([{ type: 'number', value: 1 }])
})

test('1 2 3 :push :push :push :pop :pop :pop', () => {
  const parser = new Parser('1 2 3 :push :push :push :pop :pop :pop')
  parser.eval()
  expect(parser.stack).toEqual([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
  ])
})

test('operator', () => {
  const operator = new PopOperator()
  operator.substack.push({ type: 'number', value: 1 })
  expect(operator.body()).toEqual({ type: 'number', value: 1 })
})