//settle means resolve and reject
//resolve means promise has settled successfully
//reject means promise has not settleed successfully


// function getData(){
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//      })
// }

// console.log("Loading Modules")   //this will run first
// console.log("Do something else")   //then this will run
// console.log("Load Data")   //then this will run
// let data=getData()   //here we are fetching data ,so it will run in background and next iteration will also run simultaneously
// console.log(data)   //then this will run 
// console.log("Process Data")  //then this will run




// If you want after fetching the data,then the further code should be run
// Here is the first approach

// function getData(){
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
    
// console.log("Loading Modules")   //this will run first
// console.log("Do something else")   //then this will run
// console.log("Load Data")   //then this will run
// let data=getData()   //here we are fetching data ,so it will run in background and after fetching is done then only it moves to next iteration
// data.then((d) => {
//     console.log(data)   
//     console.log("Process Data")  
//     console.log("Task 2")
// })





// Here is the second approach(better approach)
// async function getData(){
//     //Simulate getting data from server
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
 
// async function main(){
//     console.log("Loading Modules")   //this will run first
//     console.log("Do something else")   //then this will run
//     console.log("Load Data")   //then this will run
//     let data= await getData()   //here we are fetching data ,so it will run in background and after fetching is done then only it moves to next iteration.wait karega jab tak ke pura function khatam na ho....
//     //Remenber await -->async function ke andar chalega
//     console.log(data)   
//     console.log("Process Data")  
//     console.log("Task 2")
// }

// main()



//Fetching API

// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')  //type json placeholder,go to first site,copy it and paste it
//                                                                          //Fist we will fetch data and put it in one promise
//     // let data = await x.json()
//     let data = await x.text()                                            //then we will pass data to another promise
//     return data
// }
 
// async function main(){
//     console.log("Loading Modules")   //this will run first
//     console.log("Do something else")   //then this will run
//     console.log("Load Data")   //then this will run
//     let data = await getData()   //here we are fetching data ,so it will run in background and after fetching is done then only it moves to next iteration.wait karega jab tak ke pura function khatam na ho....
//     //Remenber await -->async function ke andar chalega
//     console.log(data)   
//     console.log("Process Data")  
//     console.log("Task 2")
// }

// main()



//one way : to fetch api post request
// type "fetch api post request"  and go to first site,copy it and paste it
// Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });




//another way: type json placeholder,go to first site, go to "routes",click on "guides(it is present at bottom)",scroll,go to "creating resource",copy that code and paste it.

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                      title: 'foo',
                      body: 'bar',
                      userId: 1,
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
            })
    let data = await x.json()
    return data
}
 
async function main(){
    console.log("Loading Modules")   //this will run first
    console.log("Do something else")   //then this will run
    console.log("Load Data")   //then this will run
    let data = await getData()   //here we are fetching data ,so it will run in background and after fetching is done then only it moves to next iteration.wait karega jab tak ke pura function khatam na ho....
    //Remenber await -->async function ke andar chalega
    console.log(data)   
    console.log("Process Data")  
    console.log("Task 2")
}

main()



//GET REQUEST : You make use of the GET request when you want to retrieve data from a server

//PUT REQUEST : In JavaScript, you can use the Put method to send data to the server to update resources

//POST REQUEST :Post for creating new resources

//DELETE REQUEST : Delete for deleting resources

// OPTIONS REQUEST : It allows you to request information about the communication options available for a given resource. In other words, it lets you ask an API what it can do and how it can do it.
