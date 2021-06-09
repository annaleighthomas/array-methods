import { filter } from './filter';

describe('creates a new Array with all items whose callback returned true or a truthy value', () => {
  it('filers out strings not starting with the letter o', () => {
    const input = ['hummus', 'olives', 'pickles', 'okra'];
    const output = filter(input, item => item.charAt(0) === 'o');
    expect(output).toEqual(['olives', 'okra']);
  });
});
