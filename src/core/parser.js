import * as operators from '../operators/index'

export default class {
  stack = []

  constructor (code = '') {
    this.code = code
  }

  get tokens () {
    const tokens = this.code
      .split('\n')
      .flatMap(token => token.split(' '))
    return tokens
  }

  eval () {
    const preprocessed = this.preprocess()
    preprocessed.forEach(map => {
      if (map.type === 'operator') {
        const { argN } = map
        const args = this.popStack(argN)
        const operatorName = map.value
        const operator = new operators[operatorName](args)
        const result = operator.body()
        this.stack.push(result)
      } else {
        this.stack.push(map)
      }
    })
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

  popStack (n) {
    const result = this.stack.slice(-n)
    this.stack = this.stack.slice(0, -n)
    return result
  }

  preprocess () {
    const parsed = this.parse()
    const result = parsed.map(map => {
      if (map.type !== 'operator') return map

      const operatorName = map.value

      if (!Object.keys(operators).includes(operatorName)) {
        throw new Error(`operator: ${operatorName} is not exists`)
      }

      const result = Object.assign({}, map, { argN: operators[operatorName].argN })
      return result
    })
    return result
  }
}