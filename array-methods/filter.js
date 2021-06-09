export function filter(arr, callback) {
  const finalArr = [];
  let index = 0;
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      finalArr[index] = arr[i];
      index++;
    }
  }
  return finalArr;
}
