
import fs from "fs/promises";

async function fileOperations(fileName) {
    try {
        await fs.writeFile(fileName, "Hello Shamil");  // 5
        let fileData = await fs.readFile(fileName, "utf-8"); // 2
        await fs.unlink(fileName) // file
        await fs.rmdir(folderName) // folder

        console.log(fileData);
    } catch (error) {
        console.log(error);
    }
}

fileOperations("shamil.txt");



function files(fileName) {

    fs.writeFile(fileName, "Hello Shamil", (err) => {
        if (err) {
            console.log(err)
        }
    });  // 5
    let fileData = fs.readFile(fileName, "utf-8", (err) => {
        if (err) {
            console.log(err)
        }
    }); // 2

    console.log(fileData);

}

files("shamil.txt");


// Task 

// Files 
// fs.readFile()

// fs.writeFile()

// fs.appendFile()

// fs.unlink() (delete file)



// fs.rename() // files and folders

// Folders

// fs.mkdir()

// fs.rmdir()

// fs.readdir()

// fs.stat()

// Task 1
/*
Create a async function which does this

Create a folder

Create a file inside that folder

Write content to the file

Read the content from the file

Delete the file

Delete the folder


*/

// Task 2: Blog on Array Methods and String Methods

// Task 3: https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

// Complete this blog ==> Implement it
