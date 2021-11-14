import Operator from '../../core/operator'
import RunOperator from '../../operators/basic/run'

export default class extends Operator {
  static argN = 3

  body () {
    const a = this.args[0]
    const b = this.args[1]
    const c = this.args[2]
    const operatorA = new RunOperator([a])

    operatorA.syncFields(this)
    const condition = operatorA.body()
    this.syncFields(operatorA)

    if (condition.value) {
      const operatorB = new RunOperator([b])

      operatorB.syncFields(this)
      const result = operatorB.body()
      this.syncFields(operatorB)

      return result
    } else {
      const operatorC = new RunOperator([c])

      operatorC.syncFields(this)
      const result = operatorC.body()
      this.syncFields(operatorC)

      return result
    }
  }
}