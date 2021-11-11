export default class {
  constructor (code = '') {
    this.code = code
  }

  get tokens () {
    const tokens = this.code
      .split('\n')
      .flatMap(token => token.split(' '))
    return tokens
  }
}