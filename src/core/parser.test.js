import Parser from './parser'

test('Parser.eval', () => {
  const code = '1 1 :add'
  const expected = [{ type: 'number', value: 2 }]
  const parser = new Parser(code)
  parser.eval()
  expect(parser.stack).toEqual(expected)
})

test('Parser.parse', () => {
  const code = '1 1 :add'
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 1 },
    { type: 'operator', value: 'add' },
  ]
  const parser = new Parser(code)
  expect(parser.parse()).toEqual(expected)
})

test('Parser.parse 2', () => {
  const code = '+1 -1 1.0 +1.0 -1.0 ok true false'
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: -1 },
    { type: 'number', value: 1.0 },
    { type: 'number', value: 1.0 },
    { type: 'number', value: -1.0 },
    { type: 'string', value: 'ok' },
    { type: 'boolean', value: true },
    { type: 'boolean', value: false },
  ]
  const parser = new Parser(code)
  expect(parser.parse()).toEqual(expected)
})

test('Parser.preprocess', () => {
  const code = '1 1 :add'
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 1 },
    { argN: 2, type: 'operator', value: 'add' },
  ]
  const parser = new Parser(code)
  expect(parser.preprocess()).toEqual(expected)
})

test('Parser.preprocess 2', () => {
  const code = ':foo'
  const parser = new Parser(code)
  expect(() => {
    parser.preprocess()
  }).toThrow()
})

test('Parser.tokens', () => {
  const code = [
    '1 1 :add foo :set',
    'foo :get -2 :add :string :print',
  ].join('\n')
  const expected = [
    '1', '1', ':add', 'foo', ':set',
    'foo', ':get', '-2', ':add', ':string', ':print',
  ]
  const parser = new Parser(code)
  expect(parser.tokens).toEqual(expected)
})

test('example code', () => {
  const code = [
    '1', 'i', ':set',
    'i', '::get',
    '1', '::add',
    'i', '::set',
    ':defer',
    'increment', ':set',
    'increment', ':get',
    ':run',
    'increment', ':get',
    ':run',
    'i', ':get',
  ].join(' ')
  const parser = new Parser(code)
  parser.eval()
  expect(parser.stack).toEqual([{ type: 'number', value: 3 }])
})

test('example code 2', () => {
  const code = [
    'no', ':defer',
    'c', ':set',
    'yes', ':defer',
    'b', ':set',
    'true', ':defer',
    'a', ':set',
    'c', ':get',
    'b', ':get',
    'a', ':get',
    ':if',
  ].join(' ')
  const parser = new Parser(code)
  parser.eval()
  expect(parser.stack).toEqual([{ type: 'string', value: 'yes' }])
})

test('example code 3', () => {
  const code = [
    'no', ':defer',
    'c', ':set',
    'yes', ':defer',
    'b', ':set',
    'false', ':defer',
    'a', ':set',
    'c', ':get',
    'b', ':get',
    'a', ':get',
    ':if',
  ].join(' ')
  const parser = new Parser(code)
  parser.eval()
  expect(parser.stack).toEqual([{ type: 'string', value: 'no' }])
})