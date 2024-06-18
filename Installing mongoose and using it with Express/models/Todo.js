import mongoose from "mongoose";

//This is TodoSchema we have created.
//Everything is derived from a Schema. 
//Let's get a reference to it and define our todo.
// We've got a schema with three properties,(title--which will be a String),(desc--which will be a String),(isDone--which will be a String),(days--which will be a Number)
const TodoSchema = new mongoose.Schema({
    title: {type:String, required:true, default:"Hey"},
    desc: String,
    isDone: Boolean,
    days: Number
});

//Compiling our Schema into a Model.
export const Todo = mongoose.model('Todo', TodoSchema);