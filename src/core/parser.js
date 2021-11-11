export default class {
  constructor (code = '') {
    this.code = code
  }

  get tokens () {
    const tokens = this.code
      .split('\n')
      .flatMap(token => token.split(' '))
    return tokens
  }

  parse () {
    function createResult (value, type) {
      const result = { type, value }
      return result
    }

    const result = this.tokens.map(token => {
      switch (true) {
        case /\d+/.test(token):
          const number = parseInt(token, 10)
          return createResult(number, 'number')

        case /^:/.test(token):
          const operatorName = token.slice(1)
          return createResult(operatorName, 'operator')

        default:
          return createResult(token, 'string')
      }
    })
    return result
  }
}