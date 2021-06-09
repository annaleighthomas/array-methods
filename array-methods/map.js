export function map(arr, callback) {
  const mainArr = [];
  for(let i = 0; i < arr.length; i++) {
    mainArr[i] = callback(arr[i]);
  }
  return mainArr; 

}
