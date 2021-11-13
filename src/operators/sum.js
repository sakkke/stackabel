import Operator from '../core/operator'

export default class extends Operator {
  static argN = Infinity

  body () {
    const value = this.args
      .map(arg => arg.value)
      .reduce((pv, cv) => pv + cv)
    return {
      type: 'number',
      value,
    }
  }
}