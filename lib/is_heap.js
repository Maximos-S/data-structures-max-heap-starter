// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  let leftChild = array[2 * idx]
  let rightChild = array[2 * idx + 1]

  if (leftChild === undefined) leftChild = -Infinity
  if (rightChild === undefined) rightChild = -Infinity

  if (leftChild === -Infinity && rightChild === -Infinity) return true

  if (array[idx] > leftChild && array[idx] > rightChild) {
    idx++
    return isMaxHeap(array, idx)
  }

  return false

}


module.exports = {
  isMaxHeap
};
