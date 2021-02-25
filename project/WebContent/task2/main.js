function validateForm(){
    var firstname=document.getElementById("fname").value;
        if(firstname=="" ){
          document.getElementById('error-fname').innerHTML = " Please write Your First Name";
        }
        if(firstname.length>=1 && firstname.length<8 ){
          document.getElementById('error-fname').innerHTML = " Your First Name should be atleast 8 characters"; 
        }
        if(firstname.length>=8 && firstname.length<=15){
          document.getElementById('error-fname').innerHTML =" "; 
        }
        if(firstname.length>15){
          document.getElementById('error-fname').innerHTML ="Your First Name should be below 15 characters";
        }
    

    var lastname=document.getElementById("lname").value;
        if(lastname==""){
          document.getElementById('error-lname').innerHTML = "Please write Your Last Name";
        }
        if(lastname.length>=1&& lastname.length<5){
          document.getElementById('error-lname').innerHTML = "Your Last Name should be atleast 5 characters";  
        }
        if(lastname.length>15){
          document.getElementById('error-lname').innerHTML ="Your Last Name should be below 15 characters";  
        }
        if(lastname.length>=5&& lastname.length<15){
          document.getElementById('error-lname').innerHTML = ""; 
        }
    var age=document.getElementById("age").value;
    // If age is Not a Number or less than one or greater than 10
        if(age==""){
          document.getElementById("error-age").innerHTML="Please Enter your Age";
        }
        if (isNaN(age) || age < 1 || age > 100) {
          document.getElementById("error-age").innerHTML="Enter  Valid Age";   
        }
        if(age>1 && age<100){
          document.getElementById("error-age").innerHTML=" "; 
        }
            
    var email = document.getElementById("email").value;
        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");
        if(email==""){
          document.getElementById("error-email").innerHTML ="Please enter email ID";
        }
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
         document.getElementById("error-email").innerHTML ="Please enter correct email ID";
          
        }
        else{
          document.getElementById("error-email").innerHTML =" ";
        }

    var password = document.getElementById("password"), 
        confirm_password = document.getElementById("confirm_password");
    var paswd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    
    if(password.value==""){
      document.getElementById("error-password").innerHTML="Please Enter password";  
    }

    if(password.value.match(paswd)){
      document.getElementById("error-password").innerHTML=" ";   
    }
   else{
     document.getElementById("error-password").innerHTML="Enter Correct password";
    }     
     
  function validatePassword(){
      if(password.value != confirm_password.value) {
        validity_check=document.getElementById("error-cpassword").innerHTML="password did not match";
        confirm_password.setCustomValidity(validity_check);
      } 
      else {
        confirm_password.setCustomValidity('');
      }
    }
      password.onchange = validatePassword;
      confirm_password.onkeyup = validatePassword;
}

 