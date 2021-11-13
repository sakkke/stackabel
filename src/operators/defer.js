import Operator from '../core/operator'

export default class extends Operator {
  static argN = Infinity

  body () {
    const value = this.args.map(arg => Object.assign(
      {},
      /^:::+/.test(arg.value)
        ? { type: 'string', value: arg.value.replace(/^:/, '') }
        : /^::/.test(arg.value)
          ? { type: 'operator', value: arg.value.replace(/^::/, '') }
          : arg,
    )).reverse()
    return {
      type: 'defer',
      value,
    }
  }
}