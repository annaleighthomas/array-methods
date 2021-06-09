export function reduce(arr, callback) {
  let value = arr[0];
  for(let i = 1; i < arr.length; i++) {
    value = callback(value, arr[i]);
  }
  return value;
}
