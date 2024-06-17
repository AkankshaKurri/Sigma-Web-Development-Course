//Mongodb ko click karna aur localhost se connect karna 
//Fir yeh code run karna
//yeh database create hoga

// Mongodb ka best feature
//Iss data ko hum kahi se bhi edit ya delete ya update kar sakte hai
//like mobile se, web app se, vscode se, and mongodb compass se

// You can add DataTransfer, update Data, delete data

//Mongo shell

// show databases --> all databases will be shown
// use sigma --> here we are switching to "sigma" database[sigma is a database]
// db.courses.find() --> here we can see what data is present in "sigma" database[inside sigma---courses is a collection]
//db.courses.insertOne({name: "Javascript"}) --> this is one way to insert data

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
  { 'Name': 'Java', 'Price': 10000, 'Instructor': "Alice"},
  { 'Name': 'Python', 'Price': 2000, 'Instructor': "Bob"},
  { 'Name': 'C++', 'Price': 5000, 'Instructor': "Charlie"},
  { 'Name': 'Javascript', 'Price': 5000, 'Instructor': "David"},
  { 'Name': 'Ruby', 'Price': 10000, 'Instructor': "Chatterjee"},
  { 'Name': 'C#', 'Price': 75000, 'Instructor': "Katlin"},
  { 'Name': 'C', 'Price': 75000, 'Instructor': "Honey"},
  { 'Name': 'HTML', 'Price': 1000, 'Instructor':"Fazia"},
]);

// Print a message to the output window.
console.log(`Inserting Done`);



