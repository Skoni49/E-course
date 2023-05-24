var countStudents = document.getElementById("n-students");
var countTeachers = document.getElementById("n-teachers");
var countMatieres = document.getElementById("n-matier");
var tbody = document.getElementsByTagName("tbody");
const allUsers = []
console.log("dsad");
async function fetchData(params) {
    let count = await fetch("http://localhost:3000/student/count", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }).then(res => res.json()).then(data => data.data);
    console.log(count);
    countStudents.innerHTML = count.student;
    countTeachers.innerHTML = count.teacher;
}
fetchData();
//get users
async function fetchUsers() {
    let users = await fetch("http://localhost:3000/student/getall", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }).then(res => res.json()).then(data => data.data);
    users.student.forEach(element => {
        allUsers.push(element);
    }
    );
    users.teacher.forEach(element => {
        allUsers.push(element);
    }
    );
    Tabel();
}
function Tabel() {
    tbody[0].innerHTML = "";
    allUsers.forEach(element => {
        tbody[0].innerHTML += `<tr>
        <td>${element.firstname}</td>
        <td>${element.lastname}</td>
        <td>${element.email}</td>
        <td>${element.type}</td>
       ${element.type == "Student" ? `<td><button onclick="deleteStudent('${element["_id"]}')" class="btn btn-danger">Delete</button></td>` : `<td><button onclick="deleteTeacher('${element["_id"]}')" class="btn btn-danger">Delete</button></td>`}
        </tr>`
    }
    );
}
async function deleteStudent(id) {
    let r = await fetch("http://localhost:3000/student/deleteStudent",
        {
            body: `id=${id}`,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then(res => res.json()).then(
            data => {
                if (data.res) {
                    allUsers.splice(allUsers.indexOf(id), 1);
                    fetchUsers();
                } else {
                    alert(data.mes);
                }
            }
        ).catch(err => { console.log(err); });
}
async function deleteTeacher(id) {
    let r = await fetch("http://localhost:3000/student/deleteTeacher",
        {
            body: `id=${id}`,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then(res => res.json()).then(
            data => {
                if (data.res) {
                    allUsers.splice(allUsers.indexOf(id), 1);
                    fetchUsers();
                } else {
                    alert(data.mes);
                }
            }
        ).catch(err => { console.log(err); });
}
fetchUsers();