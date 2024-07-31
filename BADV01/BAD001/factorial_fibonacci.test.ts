import { factorial, fibonacci } from './factorial_fibonacci';

test('factorial', () => {
  expect(factorial(5)).toBe(120)
});

test('fibonacci', () => {
  expect(fibonacci(4)).toBe(3)
});