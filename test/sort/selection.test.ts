import { Selection } from '../../src/sort/selection'

test('[5, 4, 3, 2, 1] equals [1, 2, 3, 4, 5]', () => {
  const selection = new Selection([5, 4, 3, 2, 1])
  expect(selection.exec()).toEqual([1, 2, 3, 4, 5])
})

test('[6, 2, 9, 4, 1] equals [1, 2, 4, 6, 9]', () => {
  const selection = new Selection([6, 2, 9, 4, 1])
  expect(selection.exec()).toEqual([1, 2, 4, 6, 9])
})

test('[1, 2, 3, 4, 5] equals [1, 2, 3, 4, 5]', () => {
  const selection = new Selection([1, 2, 3, 4, 5])
  expect(selection.exec()).toEqual([1, 2, 3, 4, 5])
})

test('[3, 3, 10, 2, 2] equals [2, 2, 3, 3, 10]', () => {
  const selection = new Selection([3, 3, 10, 2, 2])
  expect(selection.exec()).toEqual([2, 2, 3, 3, 10])
})

test('[-3, -2, -5, 8, 2] equals [-5, -3, -2, 2, 8]', () => {
  const selection = new Selection([-3, -2, -5, 8, 2])
  expect(selection.exec()).toEqual([-5, -3, -2, 2, 8])
})
