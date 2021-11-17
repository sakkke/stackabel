import Operator from '../../core/operator'

export default class extends Operator {
  static argN = 1

  body () {
    const item = this.args[0]
    console.log(JSON.stringify(item.value))
  }
}