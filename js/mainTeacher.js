console.log("sfadf");
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
var cours = document.getElementById("cours");
var newCours = document.getElementById("newCours");
var courses = [];
var te = document.getElementById("idt");
//add parameters to href of newCours
newCours.href = "./teacher-page.html?id=" + params.id;
//get all cours
function getAllcourses(params) {
  fetch("http://localhost:3000/teacher/matier?id=" + params.id, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
        te.innerHTML =`${data.teacher.firstname} ${data.teacher.lastname}`;
        console.log(data.teacher.firstname);
      if (data.res) {
        console.log(data.data);
        courses = [];
        courses = data.data;
       
        rempile();
      } else {

        console.log(data.mes);
      }
    })
    .catch((err) => {

      console.log(err);
    });
}
getAllcourses(params);
function rempile() {
  cours.innerHTML = "";
  console.log(courses);
  courses.forEach((element) => {
    cours.innerHTML += `
        <div
        class="w-full max-w-sm bg-white border border-gray-200 pt-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div class="flex flex-col items-center pb-10">
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${element.matier}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">${element.description}</span>
            <div class="flex mt-4 flex-col gap-4 space-x-3 md:mt-6">
                <a href="${element.pdf}"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</a>
                    <div onclick="deleteCours('${element._id}')"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</div>
                    </div>
                    <p> Code: ${element.code}<p>
        </div>
    </div>
        `;
  });
}
function deleteCours(id) {
  fetch("http://localhost:3000/teacher/deleteMatier?id=" + id, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.res) {
        location.reload();
      } else {
        console.log(data.mes);
      }
    })
    .catch((err) => {
      console.log(err);
    });
    
}
