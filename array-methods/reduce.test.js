import { reduce } from './reduce';

describe('the return value is passed as the accumulator argument of the next function call', () => {
  it('should Accumulate all the value and return the sum of 10', () => {
    const input = [1, 2, 3, 4];
    const output = reduce(input, (accumulator, item) => accumulator + item);
    expect(output).toEqual(10);
  });

  it('should Accumulate all the value and return the sum of 24', () => {
    const input = [1, 2, 3, 4];
    const output = reduce(input, (accumulator, item) => accumulator * item);
    expect(output).toEqual(24);
  });
});
