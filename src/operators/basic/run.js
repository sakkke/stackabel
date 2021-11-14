import Operator from '../../core/operator'
import Parser from '../../core/parser'

export default class extends Operator {
  static argN = 1

  body () {
    const parser = new Parser()
    const parsed = this.args[0].value
    const preprocessed = parser.preprocess(parsed)

    parser.syncFields(this)
    parser.eval(preprocessed)
    this.syncFields(parser)

    const result = parser.stack.at(-1)
    return result
  }
}