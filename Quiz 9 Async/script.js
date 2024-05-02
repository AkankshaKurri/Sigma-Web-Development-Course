const randomDelay = ()=>{
    return new Promise((resolve, reject) => {
        timeout = 1 + Math.random() * 6;              //a + b-a * 0 --> 1 + 6 * 0
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

const addItem = async(item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

async function main(){
    let t = setInterval(() => {
                // let last = document.body.lastElementChild;
    
                let last = document.body.getElementsByTagName("div");
                last = last[last.length - 1]

                if(last.innerHTML.endsWith("...")){
                    last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
                }
                else{
                    last.innerHTML = last.innerHTML + "."
                }
            }, 100);

    let text =["Initializing Hacking",
               "Reading your Files",
               "Password files Detected",
               "Sending all passwords and personal files to server",
               "Cleaning up"]

    for (const item of text) {
        await addItem(item)
    }

    await randomDelay();
    clearInterval(t)
}
main()


/*

const randomDelay = () => {
This line defines a function named randomDelay using arrow function syntax. This function has no parameters.

return new Promise((resolve, reject) => {
Here, we're creating a new promise. A promise is like a placeholder for some future value or action.
The resolve and reject functions are provided by JavaScript to handle the completion or failure of the promise.

timeout = 1 + Math.random() * 6;
This line generates a random number between 1 and 6 and assigns it to the variable timeout.
Math.random() generates a random number between 0 and 1.

setTimeout(() => { resolve() }, timeout * 1000);
This line sets a timeout for the promise to resolve after a certain amount of time.
The resolve() function is called when the timeout expires, indicating that the promise has been fulfilled.

});
This closes the promise creation and arrow function blocks.

const addItem = async (item) => {
This defines another function named addItem using arrow function syntax.
The async keyword indicates that this function will use asynchronous operations.

await randomDelay();
Here, we're waiting for the randomDelay function to complete before continuing execution.
await is used with promises to pause the execution of the function until the promise is resolved.

let div = document.createElement("div");
This creates a new <div> element in the document.

div.innerHTML = item;
This sets the inner HTML content of the <div> element to the value of the item parameter.

document.body.append(div);
This appends the newly created <div> element to the end of the document body.

async function main() {
This line defines the main function, indicating that it's asynchronous.

let t = setInterval(() => {
Here, we're setting up a timer using setInterval. This function will repeatedly execute the provided function (() => { ... }) at a fixed time interval.

let last = document.body.getElementsByTagName("div");
This line finds all <div> elements within the document body.

last = last[last.length - 1];
Here, we're selecting the last <div> element from the list of elements found in the previous step.

if (last.innerHTML.endsWith("...")) {
This condition checks if the inner HTML content of the last <div> element ends with "...".
endsWith("...") is a method that checks if a string ends with a specified suffix.

last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
If the condition is true, this line removes the last three characters ("...") from the inner HTML content of the last <div> element.
slice(0, last.innerHTML.length - 3) removes the last three characters from the string.

} else {
This else block executes if the condition in the if statement is false.

last.innerHTML = last.innerHTML + ".";
Here, we're adding a dot to the end of the inner HTML content of the last <div> element.
}, 100);
This specifies that the interval between executions of the function provided to setInterval is 100 milliseconds.

for (const item of text) {
This line starts a loop that iterates over each item in the text array.

await addItem(item);
Inside the loop, we're waiting for the addItem function to complete for each item in the text array.

await randomDelay();
Here, we're waiting for a random delay after adding all items.

clearInterval(t);
This line stops the interval timer t that was set up using setInterval.

} main();
Finally, we're calling the main function to start the whole process.

*/