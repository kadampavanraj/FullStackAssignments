function checkPassword(){

    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("cpass").value;
    let result = document.getElementById("result");

        if(password.length < 8){
            result.innerHTML = "Password should contain at least 8 characters";
        }

        else if(!/[A-Z]/.test(password)){
            result.innerHTML = "Password should contain at least one uppercase letter";
        }

        else if(!/[a-z]/.test(password)){
            result.innerHTML = "Password should contain at least one lowercase letter";
        }

        else if(!/[0-9]/.test(password)){
            result.innerHTML = "Password should contain at least one digit";
        }

        else if(!/[!@#$%^&*]/.test(password)){
            result.innerHTML = "Password should contain at least one special character";
        }

        else if(password != confirmPassword){
            result.innerHTML = "Password Not Matched";
        }

        else{
            result.innerHTML = "Password Matched";
        }
    }