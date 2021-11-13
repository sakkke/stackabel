import Operator from '../core/operator'

export default class extends Operator {
  static argN = 1

  body () {
    const a = this.args[0].value
    return {
      type: 'number',
      value: Math.cos(a),
    }
  }
}