//    sirs code


import axios from "axios";

async function serverCall() {
  try {
    let output = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(output.data);
  } catch (shamil) {
    console.log(shamil);
  }
}

// serverCall();

// let person = {
//   fname: "Suhail",
//   data: [
//     {
//       id: 1,
//       name: "Leanne Graham",
//       username: "Bret",
//       email: "Sincere@april.biz",
//       address: [Object],
//       phone: "1-770-736-8031 x56442",
//       website: "hildegard.org",
//       company: [Object],
//     },
//     {
//       id: 2,
//       name: "Ervin Howell",
//       username: "Antonette",
//       email: "Shanna@melissa.tv",
//       address: [Object],
//       phone: "010-692-6593 x09125",
//       website: "anastasia.net",
//       company: [Object],
//     },
//   ],
// };









//    shamils code

// import axios from "axios";

async function serverCall() {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");

    // console.log(res.data);
    let userArray = res.data;
    // console.log(userArray);
    console.log("hello");
    let name = userArray.map((x) => {
      return x.name;
    });
    console.log(name);

    for (let i = 0; i <= userArray.length - 1; i++) {
      console.log(userArray[i].name);
    }
  } catch (error) {
    console.log(error);
  }
}

serverCall();
