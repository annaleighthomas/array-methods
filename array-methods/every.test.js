import { every } from './every';

describe('returns an overall true value if all callback return true or a truthy value', () => {
  it('outputs false if no number is greater than 100', () => {
    const input = [3, 6, 8, 9, 20, 45, 72];
    const output = every(input, item => item < 100);
    expect(output).toEqual(true);
  });
});
