import Operator from '../../core/operator'
import Parser from '../../core/parser'

export default class extends Operator {
  static argN = 1

  body () {
    const parser = new Parser()
    const parsed = this.args[0].value
    const preprocessed = parser.preprocess(parsed)

    for (const [key, value] of this.namespace) {
      parser.namespace.set(key, value)
    }

    parser.eval(preprocessed)

    for (const [key, value] of parser.namespace) {
      this.namespace.set(key, value)
    }

    const result = parser.stack.at(-1)
    return result
  }
}