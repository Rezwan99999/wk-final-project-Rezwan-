// ======================================Sign Up Form Validation=======================================
function hide_form() {
    const show = document.querySelector(".form");
    const show1 = document.querySelector(".form-2");
    if (show) {
        show.style.display = "none";
        show1.style.display = "flex";
    } else {
        console.error("Element with class 'form-2' not found");
    }
}

// second-cross
function hide1_form() {
    const show = document.querySelector(".form-2");
    if (show) {
        show.style.display = "none";
    } else {
        console.error("Element with class 'form-2' not found");
    }
}
function hide2_form() {
    const show = document.querySelector(".form-3");
    const show1 = document.querySelector(".form-2");
    if (show) {
        show.style.display = "none";
        show1.style.display = "flex";
    } else {
        console.error("Element with class 'form-2' not found");
    }
}



function show_1() {
    const show1 = document.querySelector(".form");
    const show = document.querySelector(".form-2");
    if (show) {
        show.style.display = "none";
        show1.style.display = "flex";
    } else {
        console.error("Element with class 'form-2' not found");
    }
   
    
}
function show_2() {
    const show1 = document.querySelector(".form");
    const show = document.querySelector(".form-2");
    if (show) {
        show.style.display = "flex";
        show1.style.display = "none";
    } else {
        console.error("Element with class 'form-2' not found");
    }
   
    
}

// forgot_pass
function forgot() {
    const show1 = document.querySelector(".form-3");
    const show = document.querySelector(".form-2");
    if (show) {
        show.style.display = "none";
        show1.style.display = "flex";
    } else {
        console.error("Element with class 'form-2' not found");
    }
   
    
}

// Email-Check
let email=document.querySelector("#email");
let email_err = document.querySelector("#error2");


function emailCheck() {
    console.log("ok");
    
  let data = email.value.trim();
  
  if (!/^(?=.*[0-9])(?=.*[\W_]).{6,}$/.test(data)) {
    email_err.innerHTML = "***Email must contain at least one special character, one number, and be at least 6 characters long***";
    email_err.style.color = "red";
  } else {
    email_err.innerHTML = "";
  
  }
}
email.addEventListener("input", emailCheck);

let license = document.querySelector("#license");
let license_err = document.querySelector("#error3");

function licenseCheck() {
    let data = license.value.trim();
    
    if (!/^[A-Z]{4}-\d{4}-\d{4}$/.test(data)) {
        license_err.innerHTML = "***Invalid license format. Expected: ABCD-1234-5678***";
        license_err.style.color = "red";
        license_err.style.display = "block";
    } else {
        license_err.innerHTML = "";
        license_err.style.display = "none";
    }
}

license.addEventListener("input", licenseCheck);
// pass-check-1

let pass = document.getElementById("password");
let cnfpass = document.getElementById("confirmPassword");
let pass_err = document.getElementById("error4");
let cnf_err = document.getElementById("error5");
function passcheck() {

    let data = pass.value;
  
    if (data.length < 8) {
      pass_err.innerHTML = "Password must be at least 8 characters long";
      pass_err.style.color = "red";
    }
  
    else {
      pass_err.innerHTML = "";
  
    }
  }
  password.addEventListener("input", passcheck);
  
  function cnfcheck() {
    let data = pass.value;
    let data1 = cnfpass.value;
  
    if (data1.length < 8) {
      cnf_err.innerHTML = "Password must be at least 8 characters long";
      cnf_err.style.color = "red";
    }
    else if (data !== data1) {
      cnf_err.innerHTML = "Password Not Match"
      cnfpass.style.border = "none";
      cnfpass.style.border = "1px solid red";
  
    }
  
  
    else {
      cnf_err.innerHTML = "";
      cnfpass.style.borderColor = "black";
  
    }
  }
  
  confirmPassword.addEventListener("input", cnfcheck);

function data()
{
  let fullname_01= document.getElementById("f_name").value;
  let uname_01= document.getElementById("u_name").value;
  let licence= document.getElementById("license").value;
  let pass_01 = document.getElementById("password").value;
  let cnfpass_01 = document.getElementById("confirmPassword").value;
  let email_01=document.getElementById("email").value;
  let address=document.getElementById("address").value;
  let check=document.getElementById("chec_1").value;
  const show = document.querySelector(".form");
  const show1 = document.querySelector(".form-2");

  if((fullname_01=="")||(email_01=="")||(licence=="")||(pass_01=="")||(cnfpass_01=="")||(uname_01=="")||(address=="")||(check==""))
  {
    alert("All field Required");
    return false;
  }
  else
  {
    alert("Data SuccessFully Submit");
    show.style.display="none"
    show1.style.display="flex"
    

    return true;
  }


}
//password-check2

let pass1 = document.getElementById("pass_check");
let cnfpass1 = document.getElementById("confirm_check");
let pass_err1 = document.getElementById("error6");
let cnf_err1 = document.getElementById("error7");
function passcheck1() {

    let data = pass1.value;
  
    if (data.length < 8) {
      pass_err1.innerHTML = "Password must be at least 8 characters long";
      pass_err1.style.color = "red";
    }
  
    else {
      pass_err1.innerHTML = "";
  
    }
  }
  pass_check.addEventListener("input", passcheck1);
  
  function cnfcheck1() {
    let data = pass1.value;
    let data1 = cnfpass1.value;
  
    if (data1.length < 8) {
      cnf_err1.innerHTML = "Password must be at least 8 characters long";
      cnf_err1.style.color = "red";
    }
    else if (data !== data1) {
      cnf_err1.innerHTML = "Password Not Match"
      cnfpass1.style.border = "none";
      cnfpass1.style.border = "1px solid red";
  
    }
  
  
    else {
      cnf_err1.innerHTML = "";
      cnfpass1.style.borderColor = "black";
  
    }
  }
  
  confirm_check.addEventListener("input", cnfcheck1);

// password-submit


function data1()
{
 
    let pass1 = document.getElementById("pass_check").value;
    let cnfpass1 = document.getElementById("confirm_check").value;
    const show = document.querySelector(".form-2");
    const show1 = document.querySelector(".form-3");
 

  
  if((pass1!=""||cnfpass1!="")&&(pass1==cnfpass1)){
    alert("Password Changed")
    show1.style.display="none"
    show.style.display="flex"
  }
 else if(pass1!=cnfpass1)
 alert("Password Not Matched")
else
alert("All Field Required")

}
