export class Measure {
  private readonly _measureName: string = ''
  private readonly _startMark: string = ''
  private readonly _endMark: string = ''

  constructor(measureName: string, startMark: string, endMark: string) {
    this._measureName = measureName
    this._startMark = startMark
    this._endMark = endMark
  }

  public start = () => {
    performance.mark(this._startMark)
  }
  public end = () => {
    performance.mark(this._endMark)
    performance.measure(this._measureName, this._startMark, this._endMark)
  }
  public getResults = () => {
    return performance.getEntriesByName(this._measureName)
  }
}
