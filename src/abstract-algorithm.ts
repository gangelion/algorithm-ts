export abstract class AbstractAlgorithm {
  protected _input

  protected constructor(input: number[]) {
    this._input = input
  }
  abstract exec(): number[]
}
