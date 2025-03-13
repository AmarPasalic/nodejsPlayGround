const url = "http://localhost:3000";

const createbtn= document.getElementById("create")

const getbtn= document.getElementById("get")
const deletebtn= document.getElementById("delete")

async function checkServer() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}



async function checkUsers() {
    const response = await fetch(url+"/users")
    const data = await response.json();
    console.log(data);
}


async function createUser() {
    const response = await fetch(`${url}/users`, {
      method: "POST",
      body: JSON.stringify({ name: "John", id: 4, lastName: "Doe" }),
    });
    const data = await response.json();
    console.log(data);
  }
  
  async function deleteUser() {
    const response = await fetch(`${url}/users/1`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  }


  createbtn.addEventListener("click", createUser)
  getbtn.addEventListener("click", checkUsers)
  deletebtn.addEventListener("click", deleteUser)