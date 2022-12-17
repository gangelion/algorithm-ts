import readline from 'readline'
import { Bubble, Selection } from './sort/index'
import { AbstractAlgorithm } from './abstract-algorithm'
import { Measure } from './utils/measure'

const measure = new Measure('Measure', 'Start', 'End')

const main = (input: number) => {
  let instance = {} as AbstractAlgorithm
  const original = [6, 2, 9, 4, 1]
  switch (input) {
    case 1:
      instance = new Bubble(original)
      break
    case 2:
      instance = new Selection(original)
      break
    default: {
      console.log('Invalid input')
      return false
    }
  }
  console.log('Before', original)
  measure.start()
  console.log('After', instance.exec())
  measure.end()
  console.log(`${measure.getResults()[0].duration}`)
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const query = 'Please type number >\n1: Bubble sort\n2: Selection sort\n'
reader.question(query, (inputString) => {
  const input = Number(inputString)
  main(input)
  reader.close()
})
