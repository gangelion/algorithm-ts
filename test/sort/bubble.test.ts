import { Bubble } from '../../src/sort/bubble'
import { Selection } from '../../src/sort'

test('[5, 4, 3, 2, 1] equals [1, 2, 3, 4, 5]', () => {
  const bubble = new Bubble([5, 4, 3, 2, 1])
  expect(bubble.exec()).toEqual([1, 2, 3, 4, 5])
})

test('[6, 2, 9, 4, 1] equals [1, 2, 4, 6, 9]', () => {
  const bubble = new Bubble([6, 2, 9, 4, 1])
  expect(bubble.exec()).toEqual([1, 2, 4, 6, 9])
})

test('[1, 2, 3, 4, 5] equals [1, 2, 3, 4, 5]', () => {
  const bubble = new Bubble([1, 2, 3, 4, 5])
  expect(bubble.exec()).toEqual([1, 2, 3, 4, 5])
})

test('[3, 3, 10, 2, 2] equals [2, 2, 3, 3, 10]', () => {
  const bubble = new Bubble([3, 3, 10, 2, 2])
  expect(bubble.exec()).toEqual([2, 2, 3, 3, 10])
})

test('[-3, -2, -5, 8, 2] equals [-5, -3, -2, 2, 8]', () => {
  const bubble = new Bubble([-3, -2, -5, 8, 2])
  expect(bubble.exec()).toEqual([-5, -3, -2, 2, 8])
})
