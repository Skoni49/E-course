console.log("asdfa");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("pass");
var cpassword = document.getElementById("re_pass");
var submit = document.getElementById("signup");

submit.addEventListener("click", function (e) {
    e.preventDefault()
    if (fname?.value == "" || lname?.value == "" || email?.value == "" || password?.value == "" || cpassword?.value == "") {
        alert("Please fill all the fields");
    }else{
        if (password?.value != cpassword?.value) {
            alert("Password and Confirm Password should be same");
        }else{
            fetch("http://localhost:3000/student/signup", {
                body: `firstname=${fname?.value}&lastname=${lname?.value}&email=${email?.value}&password=${password?.value}`,
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }).then(res => res.json()).then(async data => {
                if (data.res) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    window.location.href="file:///C:/Users/defaultuser0.DESKTOP-IGMTQE1/Desktop/project/sahla/sahla/login.html"
                }else{
                    console.log(data.mes);
                }
            }).catch(err => {console.log(err);});
        }
    }
        
});