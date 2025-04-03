//      sirs code

import axios from "axios";

async function serverCall() {
  try {
    let output = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(output.data);
    let userArray = output.data;
    console.log(userArray)
  } catch (err) {
    console.log(err);
  }
}

serverCall();


//          shamils code


import axios from "axios";

async function serverCall() {
  try {
    let res = await axios.get("https://api.github.com/users/shamilbin")

    console.log(res.data);
    console.log("hello");
  } catch (error){
    console.log(error);
  }
}

serverCall();
