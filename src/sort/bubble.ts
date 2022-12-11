import { AbstractAlgorithm } from '../abstract-algorithm'

export class Bubble extends AbstractAlgorithm {
  constructor(input: number[]) {
    super(input)
  }

  exec() {
    for (let i = this._input.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this._input[j] > this._input[j + 1]) {
          let tmp = this._input[j]
          this._input[j] = this._input[j + 1]
          this._input[j + 1] = tmp
        }
      }
    }
    return this._input
  }
}
