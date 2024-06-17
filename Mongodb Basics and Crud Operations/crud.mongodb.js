//CRUD OPERATIONS
use("CrudDb")



//CREATE

// db.createCollection("Courses")

// db.Courses.insertOne({
//     "Name" : "Akanksha's Web Development Course",
//     "Price" : 0,
//     "Assignments" : 12,
//     "Projects" : 45,
// })

// db.Courses.insertMany([
//     {"Name": "John's Python Programming Bootcamp", "Price": 100, "Assignments": 20, "Projects": 10},
//     {"Name": "Maria's Data Science Masterclass", "Price": 150, "Assignments": 15, "Projects": 8},
//     {"Name": "Alex's Machine Learning Journey", "Price": 200, "Assignments": 25, "Projects": 12},
//     {"Name": "Sophia's Introduction to Cybersecurity", "Price": 75, "Assignments": 10, "Projects": 5},
//     {"Name": "David's JavaScript Essentials", "Price": 50, "Assignments": 8, "Projects": 6},
//     {"Name": "Emma's Full-Stack Web Development", "Price": 300, "Assignments": 30, "Projects": 20},
//     {"Name": "Liam's React and Redux Training", "Price": 120, "Assignments": 18, "Projects": 7},
//     {"Name": "Olivia's UI/UX Design Principles", "Price": 80, "Assignments": 12, "Projects": 4},
//     {"Name": "Noah's Advanced Algorithms", "Price": 90, "Assignments": 14, "Projects": 9},
//     {"Name": "Ava's Cloud Computing Basics", "Price": 60, "Assignments": 9, "Projects": 3}])




//READ

// let a = db.Courses.find({Price:0})  
// console.log(a.toArray())
// console.log(a.count())

// let b = db.Courses.findOne({Price:0})  
// console.log(b)



//UPDATE

// db.Courses.updateOne({Price:0},{$set:{Price:100}})

//DELETE

// db.Courses.deleteOne({Price:100})

// db.Courses.deleteMany({Price:100})


// Practice it
// https://www.mongodb.com/docs/manual/reference/operator/query/