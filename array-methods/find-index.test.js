import { findIndex } from './find-index';

describe('returns the index of the first item whose callback returns true or a truthy value', () => {
  it('will return the first number greater than 20', () => {
    const input = [2, 6, 17, 24, 40, 54];
    const output = findIndex(input, item => item > 20);
    expect(output).toEqual(3);
  });

  it('will return -1 if not found', () => {
    const input = [2, 6, 17, 24, 40, 54];
    const output = findIndex(input, item => item > 60);
    expect(output).toEqual(-1);
  });
});
