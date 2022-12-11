import readline from 'readline'
import { Bubble } from './sort/bubble'
import { AbstractAlgorithm } from './abstract-algorithm'

const main = (input: number) => {
  let instance = {} as AbstractAlgorithm
  const original = [6, 2, 9, 4, 1]
  switch (input) {
    case 1:
      instance = new Bubble(original)
      break
    default: {
      console.log('Invalid input')
      return false
    }
  }
  console.log('Before', original)
  console.log('After', instance.exec())
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const query = 'Please type number >\n1: Bubble sort\n'
reader.question(query, (inputString) => {
  const input = Number(inputString)
  main(input)
  reader.close()
})
