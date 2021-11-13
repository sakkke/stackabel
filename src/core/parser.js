import * as operators from '../operators/index'

export default class {
  namespace = new Map()
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
    preprocessed.forEach(item => {
      if (item.type === 'operator') {
        const { argN } = item
        const args = this.popStack(argN)
        const operatorName = item.value
        const operator = new operators[operatorName](args)

        for (const [key, value] of this.namespace) {
          operator.namespace.set(key, value)
        }

        const result = operator.body()

        for (const [key, value] of operator.namespace) {
          this.namespace.set(key, value)
        }

        if (result !== undefined) this.stack.push(result)
      } else {
        this.stack.push(item)
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
        case /^[+-]?\d+(\.\d+)?$/.test(token):
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
    const result = [...this.stack.slice(-n)].reverse()
    this.stack = this.stack.slice(0, -n)
    return result
  }

  preprocess () {
    const parsed = this.parse()
    const result = parsed.map(item => {
      if (item.type !== 'operator') return item

      const operatorName = item.value

      if (!Object.keys(operators).includes(operatorName)) {
        throw new Error(`operator: ${operatorName} is not exists`)
      }

      const result = Object.assign({}, item, { argN: operators[operatorName].argN })
      return result
    })
    return result
  }
}