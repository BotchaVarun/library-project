document.querySelector("button").addEventListener("click", myFunction);

async function myFunction(event){
  event.preventDefault();
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
console.log(email,password);
const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  };
  try {
    const res = await fetch("https://backend-1-qp4n.onrender.com/signin", options);
    if(res.status==200)
    {
      alert("sign in successfully");
      if(email=="varunbotcha@gmail.com"&&password==="1234"){
        window.location.href="./templates/admin.html";
      }
      else{
      window.location.href="./templates/student.html";
      }
    }
    else{
      alert("Invalid credentials");
      return  
    }
    }
  catch (error) {
    console.error("Error:", error);
}
}
async function submit() {
       let email = document.getElementById("email").value;
       let password = document.getElementById("password").value;
   const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  };
  try {
    const res = await fetch("https://backend-1-qp4n.onrender.com/signup", options);
    if (res.ok) { 
        console.log("Account created successfully");
        console.log("The response is::::::::::::::::", res);
        window.location.href = '../index.html'; 
    } else {
        console.log("Failed to create account");

    }
} catch (error) {
    console.error("Error:", error);
    
}

}