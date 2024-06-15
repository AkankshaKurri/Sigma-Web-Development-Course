// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

//for example, these files become:
//1. name.jpg
//2. cat.jpg
//3. name.png
//4. this.pdf
//5. akanksha.pdf
//6. akanksha.zip
//7. lalit.zip


//this:
//jpg/name.jpg , jpg/cat.jpg
//png/name.png
//pdf/this.pdf , pdf/akanksha.pdf
//zip/akanksha.zip , zip/lalit.zip


import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath="C:\\Users\\Akanksha kurri\\OneDrive\\Documents\\Documents\\MyFiles\\Sigma Web Development Course\\Quiz 10 Clear the clutter by using nodejs"

//yahape sab files ko read karenge
let files = await fs.readdir(basepath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    if( ext!="js" && ext!="json" && item.split(".").length > 1)
    if (fsn.existsSync(ext)){
        //if "ext" naam ka extension exist karti hai toh files is "ext" naam ke andar move karenge
        fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
    }
    else{
        fs.mkdir(ext)
        fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
    }
}
