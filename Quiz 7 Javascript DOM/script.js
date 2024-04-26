// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "green";
//     e.style.color="white"
// });


// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// Array.from(boxes).forEach(element => {
//     element.style.backgroundColor = "green"
// });


// let boxes = document.querySelector(".container").children
// console.log(boxes)

// Array.from(boxes).forEach(element => {
//      element.style.backgroundColor = "green"
//  });


// a + r(random_number) * (b-a)
// here a = 0
// here b = 255

console.log("akanksha")
let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil( 0 + Math.random() * 255);
    let val2 = Math.ceil( 0 + Math.random() * 255);
    let val3 = Math.ceil( 0 + Math.random() * 255);
    return `rgb(${val1}, ${val2},${val3})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})





