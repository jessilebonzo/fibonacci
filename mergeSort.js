function mergeSort(arr) {
    if (arr.length <= 1) return arr; // checks if the array has one or zero elements

    function merge(left, right) {
        let result = []; // initializes an empty array result to store the merged output
        let i = 0, j = 0; // initializes 2 pointers i and j to traverse the left and right arrays

        while (i < left.length && j < right.length) { // runs as long as both pointers i and j are within the bounds of their respective arrays
            if (left[i] < right[j]) {
                result.push(left[i]); // element in left is smaller, it pushes it to the result array and increments 'i'
                i++;
            } else {
                result.push(right[j]); // it pushes the element from right and increments 'j'
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j)); 
    }    // concatenates the remaining elements of the left array (if any) to the result array
         // concatenates the remaining elements of the right array (if any) to the result array
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { mergeSort };
