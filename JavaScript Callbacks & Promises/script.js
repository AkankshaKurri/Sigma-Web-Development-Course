//Asynchronous actions are the actions that we initiate now and they finish localStorage.
//e.g.setTimeout

//Synchronous actions are the actions that initiate and finish one-by-one

//Pehle statement 1 print hoga, statement 2 print hoga, setimeout ko baadmei print karega, firse setTimeout ko baadmei print karega , end print karega, fir pehla setTimeout print karega,fir dusra setTimeout print karega.....
// console.log("Statement 1");     
// console.log("Statement 2");

//setTimeout : parameters(function,time)
// setTimeout(()=>{               
//     console.log("Statement 3")
// },0)

// setTimeout(()=>{
//     console.log("Statement 4")
// },1000)

// console.log("End")


//Callback functions: A callback function is a function passed into another function as an argument,ehich is then invoked inside the outer function to complete an action
//We can pass the function as variable.

//Here is an example of a callback:

// function loadScript(src,callback){
//     let script = document.createElement('script')
//     script.src = src
//     script.onload=()=> callback(script)
//     document.head.append(script)
// }

const fn = () => {
   console.log("Ganpati Bappa")
}

const callback = (arg,fn)=>{
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
   let sc = document.createElement("script");  //yeh script create karega
   sc.src = src;                               //loadScript se source yahape add hoga
   sc.onload = callback("Saibaba",fn);            //script jab load hoga,callback call hoga,argument pass hoga,argument print hoga
   document.head.append(sc)                    //fir woh script head mei print hoga
}

// //go to site prismjs cdn
// //copy that first url
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
