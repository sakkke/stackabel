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

    operatorA.substack = this.substack

    const condition = operatorA.body()

    for (const [key, value] of operatorA.namespace) {
      this.namespace.set(key, value)
    }

    this.substack = operatorA.substack

    if (condition.value) {
      const operatorB = new RunOperator([b])

      for (const [key, value] of this.namespace) {
        operatorB.namespace.set(key, value)
      }

      operatorB.substack = this.substack

      const result = operatorB.body()

      for (const [key, value] of operatorB.namespace) {
        this.namespace.set(key, value)
      }

      this.substack = operatorB.substack

      return result
    } else {
      const operatorC = new RunOperator([c])

      for (const [key, value] of this.namespace) {
        operatorC.namespace.set(key, value)
      }

      operatorC.substack = this.substack

      const result = operatorC.body()

      for (const [key, value] of operatorC.namespace) {
        this.namespace.set(key, value)
      }

      this.substack = operatorC.substack

      return result
    }
  }
}