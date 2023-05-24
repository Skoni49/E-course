console.log("asdfa");
let username = document.querySelector("#username");
let password = document.querySelector("#pass");
let loginBtn = document.querySelector("#signin");

loginBtn.addEventListener("click", async function (e) {
    console.log(username.value, password.value);
    e.preventDefault();
    if (username.value != "" && password.value != "") {
        await fetch("http://localhost:3000/student/signin", {
            body: `email=${username.value}&password=${password.value}`,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then(res => res.json()).then(async data => {
            if (data.res) {
                window.location.href = "file:///C:/Users/defaultuser0.DESKTOP-IGMTQE1/Desktop/project/sahla/sahla/student.html?id=" + data.data["_id"]
            } else {
                await fetch("http://localhost:3000/teacher/signin", {
                    body: `email=${username.value}&password=${password.value}`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                }).then(res1 => res1.json()).then(data1 => {
                    if (data1.res) {
                        window.location.href = "file:///C:/Users/defaultuser0.DESKTOP-IGMTQE1/Desktop/project/sahla/sahla/mainTeacher.html?id=" + data1.data["_id"]
                    } else {
                        console.log(data1.data);
                        alert(data1.mes);
                    }
                }
                ).catch(err => { console.log(err); });
            }
        }
        ).catch(err => { console.log(err); });
    } else {
        alert("Invalid username or password");
    }
})