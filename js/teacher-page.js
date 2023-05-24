// console.log("asdfa");
// let username = document.querySelector("#username");
// let password = document.querySelector("#password");
// let loginBtn = document.querySelector("#signin");

// loginBtn.addEventListener("click", async function (e) {
//     e.preventDefault();
//     if (username.value != "" && password.value != "") {
//         await fetch("http://localhost:3000/student/signin", {
//             body: `email=${username.value}&password=${password.value}`,
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//         }).then(res => res.json()).then(data => window.location.replace("file:///C:/Users/ghana/OneDrive/Desktop/mernstack/sahla/sahla/teacher-page.html")).catch(err => {});
//     } else {
//         alert("Invalid username or password");
//     }
// })

var module=document.getElementById("module");
var description=document.getElementById("description");
var file=document.getElementById("file");
var submit=document.getElementById("submit");
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
var id=params.id;
console.log(params);
submit.addEventListener("click",function(e){
    if (module.value=="" || description.value=="" ) {
        alert("please fill all fields");
        return;
    }
   //send file to server
    e.preventDefault();
    var formData=new FormData();
    formData.append("matier",module.value);
    formData.append("description",description.value);
    formData.append("file",file.files[0]);
    formData.append("idTeacher",id);
    formData.append("code",Math.random().toString(36).substring(7));
    fetch("http://localhost:3000/teacher/addMatier",{
        method:"POST",
        body:formData
    }).then(res=>res.json()).then(data=>{
        if(data.res){
            alert("file uploaded successfully");
            location.reload();
        }else{
            console.log(data.mes);
        }
    }
    ).catch(err=>{console.log(err);});

});