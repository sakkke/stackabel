import Operator from '../../core/operator'
import RunOperator from '../../operators/basic/run'

export default class extends Operator {
  static argN = 3

  body () {
    const a = this.args[0]
    const b = this.args[1]
    const c = this.args[2]
    const operatorA = new RunOperator([a])

    for (const [key, value] of this.namespace) {
      operatorA.namespace.set(key, value)
    }

    const condition = operatorA.body()

    for (const [key, value] of operatorA.namespace) {
      this.namespace.set(key, value)
    }

    if (condition.value) {
      const operatorB = new RunOperator([b])

      for (const [key, value] of this.namespace) {
        operatorB.namespace.set(key, value)
      }

      const result = operatorB.body()

      for (const [key, value] of operatorB.namespace) {
        this.namespace.set(key, value)
      }

      return result
    } else {
      const operatorC = new RunOperator([c])

      for (const [key, value] of this.namespace) {
        operatorC.namespace.set(key, value)
      }

      const result = operatorC.body()

      for (const [key, value] of operatorC.namespace) {
        this.namespace.set(key, value)
      }

      return result
    }
  }
}