//Basic Foundations I

//1)Get 1 to 255:
function createArray(begin, end){
	const array = []
	for (var i = begin; i <= end; i++){
		array.push(i)
	}
	return array
}
var Array = createArray(1, 255);
console.log('Part 1: ' + Array);

//2)Get even 1000:
function sumEvens(begin, end){
	var Sum = 0
	if (begin % 2 == 1){
		begin++
	}
	for (var i = begin; i <= end; i += 2){
		Sum = Sum + i
	}
	return Sum
}
var EvenTotal = sumEvens(1, 1000);
console.log('Part 2: ' + EvenTotal);

//3)Sum odd 5000:
function sumOdds(begin, end){
	var Sum = 0
	if (begin % 2 == 0){
		begin++
	}
	for (var i = begin; i <= end; i += 2){
		Sum = Sum + i
	}
	return Sum
}
var OddTotal = sumOdds(1, 5000);
console.log('Part 3: ' + OddTotal);

//4)Iterate an array:
function sumArray(array){
	var Sum = 0
	for (var i = 0; i < array.length; i++){
		Sum = Sum + array[i]
	}
	return Sum
}
var firstarray = sumArray([1,2,5]);
var secondarray = sumArray([-5,2,5,12]);
console.log('Part 4a: ' + firstarray);
console.log('Part 4b: ' + secondarray);

//5)Find max:
function arrayMax(array){
	let Max = null
	for (var i = 0; i < array.length; i++){
		if (Max == null){
			Max = array[i]
		}
		else if (Max < array[i]){
			Max = array[i]
		}
	}
	return Max
}
var maximum = arrayMax([-3,3,5,7]);
console.log('Part 5: ' + maximum);

//6)Find average:
function arrayAvg(array){
	var Sum = 0
	for (var i = 0; i < array.length; i++){
		Sum = Sum + array[i]
	}
	var Avg = Sum / array.length
	return Avg
}
var average = arrayAvg([1,3,5,7,20]);
console.log('Part 6: ' + average);

//7)Array odd:
function arrayOdds(begin, end){
	const array = []
	if (begin % 2 == 0){
		begin++
	}
	for (var i = begin; i <= end; i += 2){
		array.push(i)
	}
	return array
}
var oddArray = arrayOdds(1, 50);
console.log('Part 7: ' + oddArray);

//8)Greater than Y:
function greaterY (array, Y){
	var greater = 0
	for (var i = 0; i < array.length; i++){
		if (array[i] > Y){
			greater++
		}
	}
	return greater
}
var bigNums = greaterY([1,3,5,7], 3);
console.log('Part 8: ' + bigNums);

//9)Squares:
function squared (array){
	for (var i = 0; i < array.length; i++){
		array[i] = array[i] * array[i]
	}
	return array
}
var square = squared([1,5,10,-2]);
console.log('Part 9: ' + square);

//10)Negatives:
function noNeg (array){
	for (var i = 0; i < array.length; i++){
		if (array[i] < 0){
			array[i] = 0
		}
	}
	return array
}
var negless = noNeg([1,5,10,-2]);
console.log('Part 10: ' + negless);

//11)Max/Min/Avg:
function mma (array){
	var sum = 0;
	for (var i = 0; i < array.length; i++){
		sum = sum + array[i]
		if (i == 0){
			var min = array[i]
			var max = array[i]
		} else{
			if (array[i] < min){
				min = array[i]
			} else if (array[i] > max){
				max = array[i]
			}
		}
	}
	average = sum / array.length;
	const newarray = [max, min, average] 
	return newarray
}
var minmaxavg = mma([1,5,10,-2]);
console.log('Part 11: ' + minmaxavg);

//12)Swap Values:
function endSwap (array){
	var first = array[0];
	var last = array[(array.length - 1)]
	array[0] = last
	array[(array.length - 1)] = first
	return array
}
var swapped = endSwap([1,5,10,-2]);
console.log('Part 12: ' + swapped);

//13)Number to String:
function dojoNeg (array){
	for (var i = 0; i < array.length; i++){
		if (array[i] < 0){
			array[i] = 'Dojo'
		}
	}
	return array
}
var negdojo = dojoNeg([-1,-3,2]);
console.log('Part 13: ' + negdojo);
