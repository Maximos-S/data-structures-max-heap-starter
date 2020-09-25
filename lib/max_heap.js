class MaxHeap {
  constructor() {
    this.array = [null]
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1
  }

  siftUp(idx) {
    let parentIdx = this.getParent(idx)
    let parent = this.array[parentIdx]
    let current = this.array[idx]

    if (idx === 1) return;

    if (current > parent) {
      // [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
      [this.array[parentIdx], this.array[idx]] = [current, parent];
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    let parent = this.array[idx];
    let leftChild = this.array[this.getLeftChild(idx)]
    let rightChild = this.array[this.getRightChild(idx)]

    if (leftChild === undefined) leftChild = -Infinity
    if (rightChild === undefined) rightChild = -Infinity

    const largerNumIdx = leftChild > rightChild ? this.getLeftChild(idx) : this.getRightChild(idx)

    if (parent < this.array[largerNumIdx]) {
      [this.array[idx], this.array[largerNumIdx]] = [this.array[largerNumIdx], this.array[idx]]
      this.siftDown(largerNumIdx)
    }
  }

  deleteMax() {
    if (this.array.length === 2) return this.array.pop()

    if (this.array.length === 1) return null
    
    let max = this.array[1]
    this.array[1] = this.array.pop()
    this.siftDown(1)

    return max
  }

}

module.exports = {
  MaxHeap
};
