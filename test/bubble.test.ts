import { Bubble } from "../src/sort/bubble";

test('[5, 4, 3, 2, 1] to be [1, 2, 3, 4, 5]', () => {
  const bubble = new Bubble([5, 4, 3, 2, 1])
  expect(bubble.exec()).toEqual([1, 2, 3, 4, 5]);
})

test('[6, 2, 9, 4, 1] to be [1, 2, 4, 6, 9]', () => {
  const bubble = new Bubble([6, 2, 9, 4, 1])
  expect(bubble.exec()).toEqual([1, 2, 4, 6, 9]);
})

test('[1, 2, 3, 4, 5] to be [1, 2, 3, 4, 5]', () => {
  const bubble = new Bubble([1, 2, 3, 4, 5])
  expect(bubble.exec()).toEqual([1, 2, 3, 4, 5]);
})

test('[3, 3, 2, 2, 2] to be [2, 2, 2, 3, 3]', () => {
  const bubble = new Bubble([3, 3, 2, 2, 2])
  expect(bubble.exec()).toEqual([2, 2, 2, 3, 3]);
})
