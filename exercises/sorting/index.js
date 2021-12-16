// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                const first = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = first;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowestIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[lowestIndex] > arr[j]) lowestIndex = j;
        }
        if (lowestIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[lowestIndex];
            arr[lowestIndex] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const center = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, center)), mergeSort(arr.slice(center)))
}

function merge(left, right) {
    const result = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) result.push(left.shift());
        else result.push(right.shift());
    }
    if (left.length) result.push(...left);
    if (right.length) result.push(...right); 
    return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
