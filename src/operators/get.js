import Operator from '../core/operator'

export default class extends Operator {
  static argN = 1

  body () {
    const a = this.args[0].value
    const result = this.namespace.get(a)
    return result
  }
}