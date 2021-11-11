import Parser from './parser'

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