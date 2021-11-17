import Operator from '../../core/operator'
import RunOperator from '../../operators/basic/run'

export default class extends Operator {
  static argN = 2

  body () {
    const n = this.args[0].value
    const defer = this.args[1]
    for (let i = 0; i < n; i++) {
      const operator = new RunOperator([defer])
      operator.syncFields(this)
      this.result.push(operator.body())
    }
  }
}