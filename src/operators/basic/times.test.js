import Parser from '../../core/parser'
import TimesOperator from './times'

test('ok :defer 3 :times', () => {
  const parser = new Parser('ok :defer 3 :times')
  parser.eval()
  expect(parser.stack).toEqual([
    { type: 'string', value: 'ok' },
    { type: 'string', value: 'ok' },
    { type: 'string', value: 'ok' },
  ])
})

test('operator', () => {
  const operator = new TimesOperator([
    { type: 'number', value: 3 },
    { type: 'defer', value: [{ type: 'string', value: 'ok' }] },
  ])
  expect(operator.body()).toEqual(undefined)
})