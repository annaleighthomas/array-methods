import { map } from './map';

describe('takes an array and a call back and returns an array', () => {
  it('maps empty array', () => {
    const input = [];
    const output = map(input, item => item.toUpperCase());
    expect(output).toEqual([]);
  });

  it('', () => {
    const input = ['apple', 'banana', 'grape'];
    const output = map(input, item => item.toUpperCase());
    expect(output).toEqual(['APPLE', 'BANANA', 'GRAPE']);
  });
});
