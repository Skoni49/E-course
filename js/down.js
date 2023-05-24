console.log("sfadf");
const urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var code = params.code;
var cours = document.getElementById("cours");
async function getmatier(params) {
  await fetch(`http://localhost:3000/student/getm?code=${code}`, {
    method:"GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
  })
    .then((js) => js.json())
    .then((res) => {
      if (res.res) {
        console.log(res.data);
        res.data.map(element=>{
            cours.innerHTML+=` <div
            
            class="w-full max-w-sm bg-white border border-gray-200 pt-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20" >
            
            <div class="flex flex-col items-center pb-10">
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${element.matier}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">${element.description}</span>
                <div class="flex mt-4 flex-col gap-4 space-x-3 md:mt-6">
                    <a href="${element.pdf}"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</a>
                        <div onclick="deleteCours('${element._id}')"
                        </div>
                        
                        
            </div>
        </div>`
        })
      }
    });
}

  getmatier();

