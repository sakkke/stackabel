export default class {
  static argN = 1

  constructor (args) {
    this.args = args
  }

  body () {
    return {
      type: 'string',
      value: this.args[0],
    }
  }
}