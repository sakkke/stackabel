import Operator from '../../core/operator'

export default class extends Operator {
  static argN = 0

  body () {
    return this.stack.at(-1)
  }
}