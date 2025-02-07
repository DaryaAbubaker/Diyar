var n = parseInt(prompt('enter n'))
var array = []
var sum = 0;

for(i = 0 ; i < n ; i++){
    var num = parseInt(prompt("Enter the number"));
    array.push(num); // Store the number in the array
    sum = sum + array[i]
}
array.forEach((o)=>{
     console.log(o)
 });
 console.log("result of sum",sum/n) 