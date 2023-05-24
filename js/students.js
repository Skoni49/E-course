var tbody = document.getElementsByTagName("tbody");
var student = []
//get users
async function fetchUsers() {
    let users = await fetch("http://localhost:3000/student/getall", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }).then(res => res.json()).then(data => data.data);
    student = users.student;
    tabel();
}
function tabel() {
    tbody[0].innerHTML = "";
    student.forEach(element => {
        tbody[0].innerHTML += `<tr>
        <td>${element.firstname}</td>
        <td>${element.lastname}</td>
        <td>${element.email}</td>
        <td>${element.type}</td>
        <td><button onclick="deleteStudent('${element["_id"]}')" class="btn btn-danger">Delete</button></td>
        </tr>`
    }); 
}
async function deleteStudent(id) {
   let r= await fetch("http://localhost:3000/student/deleteStudent",
        {
            body: `id=${id}`,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then(res => res.json()).then(
            data => {
                if (data.res) {
                    fetchUsers();
                } else {
                    alert(data.mes);
                }
            }
        ).catch(err => { console.log(err); });

}
fetchUsers();