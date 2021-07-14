var testArr = [6,3,5,1,2,4]

//Challenge 1: Print Values and Sum

var Sum = 0;

for (var i = 0; i < 6; i++){
    Num = testArr[i]
    Sum = Sum + Num
    console.log('Num  '+ Num + ', Sum ' + Sum)
}

//Challenge 2: Value * Position

for (var i = 0; i < 6; i++){
    testArr[i] = testArr[i] * i 
}
console.log(testArr);