// Get 1 to 255 //

function get_array() {
    var arr = []
    for (var i=1; i<256; i++){
        arr.push(i)
    }
    return arr
    }
   var result = get_array();
   console.log(result);

//Get even 1000//
   function get_even() {
    var sum = 0
    for (var i = 1; i < 1001; i++) {
        if (i % 2 === 0) {
            sum +=i;
        }
    }
    return sum;
}
var result = get_even()
console.log(result)


//Get odd 5000//
function get_odd() {
    var sum = 0
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum;
}
var result = get_odd()
console.log(result)

//Iterate array//
function iterArray(arr) {
    var arr = [1,2,3,4]
     var sum = 0
     for (var i = 0; i < arr.length; i++) {
         sum += arr[i];
     }
     return sum;
 }
 var result = iterArray()
 console.log(result)
 

 //find max//
 function findMax(arr){
    var max = arr[0]
for (var i= 1; i < arr.length; i++){
    if (max < arr[i])
        max = arr[i]
    }
    return max;
}
console.log(findMax([4,2,6,11]))

//find average//
function average(arr){
    var average = 0
    for (var i=0; i < arr.length; i++){
        average = average + arr[i]
    }
    return average/arr.length;
}

console.log(average([2,4,6,8]))

//array odd//
function oddArr(arr){
    for (var i=1; i<50; i++){
        if (i % 2 === 1)
        arr.push(i)
    }
    return arr;
}

console.log(oddArr([]))

//great Y//
function great(arr,y) {
    
    var y = 3
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y)
            sum++
    }

    return sum;
}
console.log(great([1, 3, 5, 7],2))



//squares//
function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
       
    }
    return arr
}
console.log(squares([1, 3, 4, 5]))

//Negative//
function negative(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0

        }
    }
    return arr
}
console.log(negative([-2, 20, -5, -3]))

//minmaxavg//
function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
 console.log(maxMinAvg([2,6,4]));

//swap values//
function swap(arr) {
    
    var temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0]; 
    arr[0] = temp;
    
}
var test = [6, 2]
swap(test);
console.log(test);


//number to string//
function numStr(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i] < 0 )
        arr[i]="Dojo"
       
    }
    return arr
}

console.log(numStr([-1,-1,2]))





