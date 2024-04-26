//Insertion methods
// We looked at some ways to insert elements in the DOM.Here is another way:
// let div = document.createElement('div')  //create
// div.className = "alert"  //set class
// div.innerHTML = "<span> hello </span>"
// document.body.append(div)
// Here are some more insertion methods 
// 1. node.append(e) -> append at the end of node
// 2. node.prepend(e) -> Insert at the beginning of node
// 3. node.before(e) -> Insert before node
// 4. node.after(e) -> Insert after node
// 5. node.replaceWith(e) -> replaces node with the given node

// let div=document.createElement("div")
// div.innerHTML="I have been created by <b>Akanksha</b>"
// div.setAttribute("class","created");
// document.querySelector(".container").append(div)
//document.querySelector(".container").after(div)
//document.querySelector(".container").before(div)
//document.querySelector(".container").prepend(div)
//document.querySelector(".container").replaceWith(div)



//insert Adjacent HTML / Text / Element

//This method is used to insert HTML.The first parameter is acode word,specifying where to insert.Must be one of the following:

//1. "beforebegin" -> Insert HTML immediately before element
//2. "afterbegin" -> Insert HTML into element at the beginning
//3. "beforeend" -> Insert HTML into element at the end
//4. "afterend" -> Insert HTML immediately after element

//The second parameter is an HTML string
let cont = document.querySelector(".container")
//cont.insertAdjacentHTML("afterbegin", "Hey I am inserted by akanksha")
//cont.insertAdjacentHTML("beforebegin", "Hey I am inserted by akanksha")
//cont.insertAdjacentHTML("beforeend", "Hey I am inserted by akanksha")
//cont.insertAdjacentHTML("afterend", "Hey I am inserted by akanksha")

//cont.insertAdjacentText("afterbegin", "Hey I am inserted by akanksha")
//cont.insertAdjacentText("beforebegin", "Hey I am inserted by akanksha")
//cont.insertAdjacentText("beforeend", "Hey I am inserted by akanksha")
//cont.insertAdjacentText("afterend", "Hey I am inserted by akanksha")

// tempdiv = document.createElement("div");
// tempdiv.innerHTML = "i akanksha";
// tempdiv.setAttribute("class","element");
//cont.insertAdjacentElement("afterbegin", tempdiv)
//cont.insertAdjacentElement("beforebegin", tempdiv)
//cont.insertAdjacentElement("beforeend", tempdiv)
//cont.insertAdjacentElement("afterend", tempdiv)


//Node removal : To remve a node,there's a method node.remove()

//document.querySelector(".box").remove()  
//output : undefined
//first box will be removed

//document.querySelector(".box").remove()
//output : undefined
//second box will be removed

//ClassName and ClassList : If we assign something to elem.className, it replaces the whole string of classes.Often we want to add/remove/toggle a single class.
//1. elem.classList.add/remove("class") -> Adds/removes a class
//2. elem.classList.toggle("class") -> Adds the class if it doesnt exist,otherwise removes it
//elem.classList.contains("class") -> Checks for the given class,returns true/false

//document.querySelector(".container").classList
//output : DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']0: "container"1: "red"2: "bg-green"length: 3value: "container red bg-green"[[Prototype]]: DOMTokenList

//document.querySelector(".container").className
//output : 'container red bg-green'

//document.querySelector(".container").classList.add("pink")
//output: undefined
//a new class is added temporary

//document.querySelector(".container").classList.remove("pink")
//output : undefined
//a class will be removed temporary

//document.querySelector(".container").classList.remove("red")
//output : undefined
//a class will be removed temporary

//document.querySelector(".container").classList.toggle("red")
//output : false
//red color will disappear

//document.querySelector(".container").classList.toggle("red")
//output : true
//red color will appear




