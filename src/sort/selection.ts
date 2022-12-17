import { AbstractAlgorithm } from '../abstract-algorithm'

export class Selection extends AbstractAlgorithm {
  constructor(input: number[]) {
    super(input)
  }

  exec() {
    for (let i = this._input.length - 1; i > 0; i--) {
      let max = this._input[i]
      let maxIndex = i
      for (let j = 0; j < i; j++) {
        if (this._input[j] > max) {
          max = this._input[j]
          maxIndex = j
        }
      }
      let tmp = this._input[i]
      this._input[i] = max
      this._input[maxIndex] = tmp
    }
    return this._input
  }
}
