export function every(arr, callback) {
  for(let item of arr) {
    if(callback(item.value)){
      return true
    }
  }

}
