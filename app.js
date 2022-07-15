/* Fill your code*/
function formValidate() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;
    var phone = document.getElementById("phone").value;

    var namealert = document.getElementById("nameerror");
    var addressalert = document.getElementById("addresserror");
    var emailalert = document.getElementById("emailerror");
    var pwdalert = document.getElementById("pwderror");
    var cpwdalert = document.getElementById("cpwderror");
    var phonealert = document.getElementById("phoneerror");
    var submit = document.getElementById("submit");

    var emailexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pwdexp =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;
    var phoneexp = /^[6-9][0-9]{9}$/;

    if(name.length == 0)
    {
        document.getElementById("name").focus();
        namealert.innerHTML = "Username should not be empty";
        return false;
    }
    else if(name.length < 8)
    {
        document.getElementById("name").focus();
        namealert.innerHTML = "Username should contain a minimum of 8 characters";
        return false;
    }
    else if(name.length > 15)
    {
        document.getElementById("name").focus();
        namealert.innerHTML = "Username should contain a maximum of 15 characters";
        return false;
    }
    else
    {
        namealert.innerHTML = '';

        if(address.length == 0)
        {
            document.getElementById("address").focus();
            addressalert.innerHTML = "Address should not be empty";
            return false;
        }

        else
        {
            addressalert.innerHTML = '';

            if(email.length == 0)
            {
                document.getElementById("email").focus();
                emailalert.innerHTML = "Email should not be empty";
                return false;
            }
            else if(!email.match(emailexp))
            {
                document.getElementById("email").focus();
                emailalert.innerHTML = "Enter a valid Email";
                return false;  
            }
            
            else{

                emailalert.innerHTML = '';

                if(pwd.length == 0)
                {
                    document.getElementById("pwd").focus();
                    pwdalert.innerHTML = "Password should not be empty";
                    return false;
                }

                else if(!pwd.match(pwdexp))
                {
                    document.getElementById("pwd").focus();
                    pwdalert.innerHTML = "password must contain 1 uppercase letter, 1 lowercase letter, 1 number and 1 special symbol";
                    return false;  
                }

                else{

                    pwdalert.innerHTML = '';

                    if(pwd != cpwd)
                    {
                        document.getElementById("cpwd").focus();
                        cpwdalert.innerHTML = "password does not match";
                        return false;    
                    }

                    else{
                        cpwdalert.innerHTML = '';

                        if(!phone.match(phoneexp))
                        {
                            document.getElementById("phone").focus();
                            phonealert.innerHTML = "Enter a valid phone number";
                            return false;
                        }

                        else{
                            phonealert.innerHTML = '';
                            submit.innerHTML = 'Regex validation Success';
                            return false;
                        }
                    }
                }
            }
        }   
    }
}
