document.getElementById('add-user-btn').onclick= function(){ 
     console.log("Testinng")
     let firstName = document.getElementById("admin-createUsr-firstname").value;
     let lastName = document.getElementById("admin-createUsr-lastname").value;
     let email = document.getElementById("admin-createUsr-email").value;
     if(firstName === "" || lastName === "" || email === ""){
          window.alert("Can't add a user with empty credentials");
     }
     else{
          console.log("Valid Data")
          document.getElementById("userTable").innerHTML += `<tr><td>${email}</td><td>${firstName}</td><td>${lastName}</td><td>inActive</td></tr>`
     }
}
