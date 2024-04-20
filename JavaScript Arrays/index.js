let arr = [1,2,6,7,9]

arr[0] = 10;     //array is mutable
console.log(arr);
console.log(arr.length)   //gives length of the array
console.log(arr[0])
console.log(arr[2])

console.log(arr.toString())   //converts an array to a string of comma separated values

console.log(arr.join(" and "))  //joins all the array elements using a separator

console.log(typeof arr)      //In javascript ,arrays are objects.The typeof operator on arrays returns object

console.log(arr.pop())        //removes last element from the array
console.log(arr)         

arr.push(11)     //adds a new element at the end of the array
console.log(arr)

arr.push("Akanksha")
console.log(arr)

console.log(arr.shift())   //Removes first element and returns it,shift pop ka bhai hota hai
console.log(arr)

arr.unshift(20)  //adds element to the beginning.Returns new array length,unshift push ka bhai hota hai
console.log(arr)


delete arr[5]      //Array elements can be deleted using delete operator
console.log(arr)

console.log(arr.length)
console.log(arr[6])      //it returns undefined
                         //that means memory is allocated but there is no value
                        
 let a1=[1,2,3]
 let a2=[4,5,6]
 let a3=[7,8,9]
 console.log(a1.concat(a2,a3));    //Used to join arrays to the given arrray,Returns anew array,Does not change existing   array              


 let a4=[10,67,34,46]
 console.log(a4.sort())    //sort() method is used to sort an array alphabetically, this sort() method modifies the original array   


 let numbers =[1,2,3,4,5]
 console.log(numbers.splice(1,3,222 ,333))  //Returns deleted items,modifies the array
                         //(position to add,no.of elements to remove,elements to be added,elements to be added)
 //splice can be used to add new items to an array
 console.log(numbers)


 const num=[1,2,3,4,5,6,7,8]
 console.log(num.slice(2))     //slice out a piece from an array.It creates a new array
 console.log(num.slice(1,3))
 console.log(num.slice(5))
 console.log(num.slice(5,8))


 console.log(num.reverse())  //Reverses the elements in the source array





