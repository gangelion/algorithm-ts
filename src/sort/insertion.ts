import { AbstractAlgorithm } from '../abstract-algorithm'

export class Insertion extends AbstractAlgorithm {
  constructor(input: number[]) {
    super(input)
  }

  exec() {
    const newArray: number[] = []
    let targetIdx = 0
    for (let i = 0; i < this._input.length; i++) {
      for (let j = 0; j < newArray.length; j++) {
        if (this._input[i] > newArray[j]) {
          targetIdx = j + 1
        }
      }
      newArray.splice(targetIdx, 0, this._input[i])
      targetIdx = 0
    }
    return newArray
  }
}
