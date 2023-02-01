let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Print array values for
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  } 

//   Print array values while
let a = 0;
while (a < arr.length) {
      console.log(arr[a]);
      a++;
  }  

//   Print array values for of
for (let i of arr) {
    console.log(i);
 }
 
//  Print array values forEach
arr.forEach(function(arr) {
    console.log(arr);
});

console.log("-----------------")
// Function which will return the index of a color in the array
const colors = ["red", "green", "blue"]
function getColorIndex(color){
    let index = colors.indexOf(color);
    console.log(index);
}
getColorIndex("blue")
getColorIndex("black");