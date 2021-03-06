export default class {
  static argN = 0
  namespace = new Map()
  result = []
  stack = []
  substack = []

  constructor (args) {
    this.args = args
  }

  body () {
    return undefined
  }

  syncFields (target) {
    for (const [key, value] of target.namespace) {
      this.namespace.set(key, value)
    }

    this.stack = target.stack
    this.substack = target.substack
  }
}