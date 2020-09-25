// Use this file as a scratch pad to complete the problem at
// https://leetcode.comgit/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth
// largest element in the sorted order, not the kth distinct element.
const findKthLargest = function(nums, k) {

    let sorted = heapSort(nums)

    return sorted[sorted.length - k];

    // Example 1:

    //     Input: [3, 2, 1, 5, 6, 4] and k = 2
    // Output: 5
    // Example 2:

    //     Input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4
    // Output: 4
    // Note:
    //     You may assume k is always valid, 1≤ k≤ array 's length.
};

function heapSort(array) {

    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i)
    }


    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(array, 0, endOfHeap)
        // [array[0], array[endOfHeap]] = [array[endOfHeap], array[0]]
        heapify(array, endOfHeap, 0)
    }
    return array
}

function heapify (array, endHeap, idx) {

    let parent = array[idx]
    let leftChildIdx = idx*2 + 1
    let rightChildIdx = idx*2 + 2
    let leftChild = array[leftChildIdx]
    let rightChild = array[rightChildIdx]

    if (leftChildIdx >= endHeap) leftChild = -Infinity
    if (rightChildIdx >= endHeap) rightChild = -Infinity

    if (parent > leftChild && parent > rightChild) return array
    if(leftChild === -Infinity && rightChild === -Infinity) return array

    let largerNumIdx = leftChild > rightChild ? leftChildIdx : rightChildIdx
    swap(array,idx,largerNumIdx)
    idx = largerNumIdx
    heapify(array, endHeap, idx)
    //  siftDown(idx) {
    //      let parent = this.array[idx];
    //      let leftChild = this.array[this.getLeftChild(idx)]
    //      let rightChild = this.array[this.getRightChild(idx)]

    //      if (leftChild === undefined) leftChild = -Infinity
    //      if (rightChild === undefined) rightChild = -Infinity

    //      const largerNumIdx = leftChild > rightChild ? this.getLeftChild(idx) : this.getRightChild(idx)

    //      if (parent < this.array[largerNumIdx]) {
    //          [this.array[idx], this.array[largerNumIdx]] = [this.array[largerNumIdx], this.array[idx]]
    //          this.siftDown(largerNumIdx)
    //      }
    //  }
}


function swap(array,i, j) {
    [array[i], array[j]]=[array[j], array[i]]
}
// function quickSort(nums) {

//     if (nums.length <= 1) return nums
//     let pivot = nums[0]

//     let leftSide = []
//     let rightSide = []

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] < pivot) {
//             leftSide.push(nums[i])
//         } else {
//             rightSide.push(nums[i])
//         }
//     }

//     leftSide = quickSort(leftSide)
//     rightSide = quickSort(rightSide)

//     return [...leftSide, pivot, ...rightSide]
// }

console.log(findKthLargest([3,4,2,3,5,2,6,5], 3))