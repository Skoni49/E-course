console.log("sfadf");
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let code;
const searchh=document.getElementById("searchh")
const bsearchh=document.getElementById("button-addon2")
var welcome = document.getElementsByClassName("welcome");
async function getInformation(params) {
  await fetch("http://localhost:3000/student/getinfo", {
    body: `id=${params.id}`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.res) {
        welcome[0].innerHTML =
          "Welcome " + data.data.firstname + " " + data.data.lastname;
      } else {
        alert(data.mes);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
getInformation(params);

async function search() {
   if (searchh.value=="") {
    alert("Entre matier code,please!")
    return
   }
   console.log(searchh.value);
  await fetch(
    "http://localhost:3000/student/m",
    {
      method: "POST",
      body:`code=${searchh.value}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.res) {
        window.location.href =
        "file:///C:/Users/defaultuser0.DESKTOP-IGMTQE1/Desktop/project/sahla/sahla/down.html?code="+data.data[0].code
      } else{
        alert(data.mes)
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
bsearchh.addEventListener("click",function name() {
    search()
})