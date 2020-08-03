// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

myArr = [1,2,3,4,5,6,7]
myArr[0] = "this is the insert"
console.log(myArr);

arr = [1,5,6,8,9]
value = 20
function pushFront(arr,value){
    arr.unshift(value);
    return arr;
}
console.log(pushFront(arr,value))


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
arr = [3,6,8,4]
function popFront(arr){
    let temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
    return arr.pop()
}
console.log(popFront(arr))




// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
arr = the array 
ind = which index position you want to insert into 
val = the value of the insert

function InsertAt(arr,ind,val){
    arr[arr.length] = val
    for (var x = arr.length-1; x > ind; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
        
    }
    console.log(ind)
    return arr;
}
console.log(InsertAt([2,3,4,5,6,33,7,8],7,"this is the val"))


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function RemoveAt(arr,ind){
    // CREATING A NEW ARRAY 
    newArr = []
    // ITERATING THRU ARRAY
    for (var i = 0; i < arr.length; i++){
    // PUSHING EVERYTHING BUT THE INDEX VALUE
        if (ind != i) {
            newArr.push(arr[i])  
        }
        
    }
    // LOGGING THE VALUE OF INDEX
    console.log(arr[ind]);
    // LOGGIN THE ARRAY
    console.log(arr)
    // LOGGING THE NEW ARRAY
    return newArr;
 
}
console.log(RemoveAt([2,3,5,8,7,5],4),"this is the function")

OR WITHOUT PUSH

function RemoveAt(arr,ind){
    for (var i = ind; i < arr.length; i++){
        arr[i] = arr[i+1] 
    }
    return arr;
}
console.log(RemoveAt([2,3,5,8,7,5],4),"this is the function")


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function Swap(arr) {
    if (arr.length % 2 == 0) {
        for (var x = 0; x < arr.length; x += 2) {
            var temp = arr[x];
            arr[x] = arr[x + 1];
            arr[x + 1] = temp;
        }
    } else {
        for (var x = 0; x < arr.length - 1; x += 2) {
            var temp = arr[x];
            arr[x] = arr[x + 1];
            arr[x + 1] = temp;
        }
    }
    return arr;
}
console.log(Swap(["Brendan", true, 42]), "this is the function")


// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.

function removeDups(arr) {
    // CONTAINER VARIABLES
    var idx = 0;
    var count = 1;
    // CONDITION
    while (count < arr.length) {
        // IF THE ARRAYS INDEX IS EQUAL TO THE CURRENT COUNT 
        if (arr[idx] == arr[count]){
            // ADD 1 TO COUNT
            count++;
        } else {
            // THE ARRAYS COUNT ASSIGNED TO ARRAY INDEX VALUE PLUS 1
            arr[idx+1] = arr[count];
            // ADD 1 TO INDEX
            idx++;
            // ADD 1 TO COUNT
            count++;
        }
    }
    for (var x = 0; x < idx; x++) {
        arr.pop();
    }
    return arr;
}
console.log(removeDups(["JIM","JIM","CLARK","JASON","LOGAN","LOGAN"]))