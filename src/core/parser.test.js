import Parser from './parser'

test('Parser.eval', () => {
  const code = '1 1 :add'
  const expected = [{ type: 'number', value: 2 }]
  const parser = new Parser(code)
  parser.eval()
  expect(parser.stack).toEqual(expected)
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