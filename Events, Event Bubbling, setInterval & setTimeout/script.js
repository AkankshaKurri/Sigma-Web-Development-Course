//List of all Mouse Events
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button = document.getElementById("btn")


//Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.
// button.addEventListener("click" , ()=>{
//       alert("I was clicked yay")
// })


// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML = "<b> yayy! you  were clicked</b>"
// })

//Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.
// button.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML = "<b> yayy! you  were clicked</b>"
// })


// Fired when the user attempts to open a context menu(right click).
//page pe jaa,inspect kar,aur button par right click kar.Yeh right click pe respond deta hai 
// button.addEventListener("contextmenu",()=>{
//     alert("Don't hack us by right click")
// })


// Keyboard events
// 1.keydown
// Fired when a key is pressed.

// 2.keypress 
// Fired when a key that produces a character value is pressed down.

// 3.keyup
// Fired when a key is released.

//ek baar button par click kar,aur konsa bhi keey click kar,console pe woh key print hoga
button.addEventListener("keydown",(e)=>{
    // console.log(e);                  //jo bhi key click karegi uska detail aayega
    console.log(e.key ,e.keyCode);      //yaahape sirf key aur uska keycode aayega
})


//element.removeEventListener(event,handler)
//handler must be the same for this to work


//The Event Object
//When an event happens,the browser creates an event object,puts details into it and passes it as an argument to the handler

//elem.onclick = function(event){
//    ..............
//} 

//event.type : Event type
//event.currentTarget : Element that handled the event
//event.clientX : Coordinates of the cursor
//event.clientY : Cordinates of the cursor