function validateForm(){
  
    var firstname=document.getElementById("fname").value;
    if(firstname.length<5){
      alert("Your First Name should be atleast 8 characters");
    }
    if(firstname.length>15){
      alert("Your First Name should be below 15 characters");
    }
    
    var firstname=document.getElementById("lname").value;
    if(firstname.length<5){
      alert("Your Last Name should be atleast 5 characters");
    }
    if(firstname.length>15){
      alert("Your Last Name should be below 15 characters");
    }
  
    var age=document.getElementById("age").value;
    // If age is Not a Number or less than one or greater than 10
    if (isNaN(age) || age < 1 || age > 100) {
      alert("Please provide Valid Age") ;
    }
        
    var email = document.getElementById("email").value;
        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");
        
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
          alert("Please enter correct email ID");   
          }
  
  
      var password = document.getElementById("password"), 
          confirm_password = document.getElementById("confirm_password");
      var paswd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      
  
      if(!password.value.match(paswd)){
        alert("Enter Correct password");
      }
  
       
    function validatePassword(){
        if(password.value != confirm_password.value) {
          message=alert("password did not match");
          confirm_password.setCustomValidity(message);
        } 
        else {
          confirm_password.setCustomValidity('');
        }
      }
       
        confirm_password.onchange= validatePassword;
  }