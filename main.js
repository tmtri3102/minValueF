let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];
function findMin(array) {
	let min = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
		}
	}
	return min;
}
let actualMin = findMin(arr3);
console.log(actualMin);
