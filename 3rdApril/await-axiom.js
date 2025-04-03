
// function sayHello() {
//   return "Hello"; console.log("HELLO")
// }

// let output = sayHello() + " Shamil";
// console.log(output);

import axios from "axios";

async function serverCall() {
  try {
    let output = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(output.data);
    let myArr = output.data;
    let allEmails = myArr.map((y) => {
      return y;
    });
    
  } catch (err) {
    console.log(err);
  }
}

serverCall();
