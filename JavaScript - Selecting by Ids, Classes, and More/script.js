console.log("Akanksha")

//document.getElementsByClassName : Returns elements with that have the given CSS class
//let boxes =document.getElementsByClassName("box")
//console.log(boxes)

//This will be printed
//HTMLCollection(6) [div.box, div.box, div#pink.box, div.box, div.box, div.box, pink: div#pink.box]


//boxes[1].style.backgroundColor = "green"


//document.getElementById : This method is used to get the element with a given "id" attribute
//document.getElementById("pink").style.backgroundColor = "pink"


//document.querySelector : Returns the first element for the given css selector
//pehla box select karega
//document.querySelector(".box").style.backgroundColor = "orange"

//querySelectorAll multiple elements list karta hai(NodeList)
//console.log(document.querySelectorAll(".box"))

//This will be printed
//NodeList(7) [div.box, div.box, div.box, div#pink.box, div.box, div.box, div.box]


//document.querySelectorALL : Returns all elements inside an element matching the given CSS Selector
//we need to use any for loop to iterate each nodelist and give backgroundColor
// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "green"
// })

//document.getElementsByTagName : Returns elements with the given tag name
//console.log(document.getElementsByTagName("div"))

//This will be printed
//all div will be printed with parent div
//HTMLCollection(8) [div.container, div.box, div.box, div.box, div#pink.box, div.box, div.box, div.box, pink: div#pink.box]

//document.getElementsByName : Searches elements by the name attribute


//matches,closest and contains methods
//There are three important methods to search the DOM

//1.Element.matches(CSS) : To check if element matches the given CSS selector

//2.elem.closest(CSS) : To look for the nearest ancestor that matches the given CSS - Selector.The elem itself is also checked

//3.elemA.contains(elemB) : Returns true if elemB is inside elemA(a descendant of elemA) or when elemA == elemB

e=document.getElementsByTagName("div")

//This will be printed
//HTMLCollection(8) [div.container, div.box, div.box, div.box, div#pink.box, div.box, div.box, div.box, pink: div#pink.box]

e[5].matches("#pink")

//This will be printed
//false

e[4].matches("#pink")

//This will be printed
//true

e[4].closest("#pink")

//This will be printed
//<div id=​"pink" class=​"box">​Box 2.5​</div>​

e[4].closest(".container")

//This will be printed
//<div class=​"container">​
//    <div class=​"box">​Box 1​</div>
//    ​<div class=​"box">​Box 1.5​</div>
//    ​<div class=​"box">​Box 2​</div>
//    ​<div id=​"pink" class=​"box">​Box 2.5​</div>
//    ​<div class=​"box">​Box 3​</div>
//    ​<div class=​"box">​Box 4​</div>
//    ​<div class=​"box">​Box 5​</div>
​//</div>​


e[4].closest("html")

//This will be printed
//<html lang=​"en">​
//   <head>​…​</head>
//   ​<body>​…​</body>
//​</html>​

document.querySelector(".container").contains(e[0])

//This will be printed
//true

document.querySelector(".container").contains(e[2])

//This will be printed
//true


document.querySelector(".container").contains(document.querySelector("body"))
//This will be printed
//false


document.querySelector("body").contains(document.querySelector("body"))
//This will be printed
//true
