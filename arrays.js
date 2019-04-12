
var chocolateBars = [
  "snickers",
  "hundredgrand",
  "kitkat",
  "skittles"
  ];
  
function addElementToBeginningOfArray(array,element) { 
 
  return [element, ...array] // We can use the spread operator to create a new array in place, rather than modifying the original one. non destructive
  
  
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element) // moves element to beginning of array forcibly
  return array
}


function addElementToEndOfArray(array,element){
 
  return [...array,element] // element to end of the array, non destructive
  
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element) // forcibly moves the element to the end of the array
  return array
}

function accessElementInArray(array,index){
  
  return array[index] // accesses elements in the middle of array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift() // removes any element at the start of an array
  return array
  
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1) // this takes a slice of an element and returns it 
 
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop() // removes an element at the end of the array, destructive
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length -1) // allows you to take an element without adjusting the array itself, this slices into the index and a particular place

}