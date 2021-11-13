import Operator from '../core/operator'

export default class extends Operator {
  static argN = 2

  body () {
    const a = this.args[0].value
    const b = this.args[1].value
    return {
      type: 'number',
      value: Math.pow(b, 1 / a),
    }
  }
}