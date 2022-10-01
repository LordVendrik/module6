validation= ()=>{

    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let firstName= document.getElementById("firstname").value;
    let lastname= document.getElementById("lastname").value;
    let Email= document.getElementById("Email").value;
    let password= document.getElementById("password").value;
    let confirmPassword= document.getElementById("confirmPassword").value;
    let agreement= document.getElementById("agreement").checked;

    if(firstName.length < 3){
        document.getElementById("firstnameError").classList.remove("hide");
        return false;
    }else{
        document.getElementById("firstnameError").classList.add("hide");
    }

    if(lastname.length < 3){
        document.getElementById("lastnameError").classList.remove("hide");
        return false;
    }else{
        document.getElementById("lastnameError").classList.add("hide");
    }

    if(!filter.test(Email)){
        document.getElementById("emailerror").classList.remove("hide");
        return false;
    }else{
        document.getElementById("emailerror").classList.add("hide");
    }
    
    if(password.length < 8){
        document.getElementById("passworderror").classList.remove("hide");
        return false;
    }else{
        document.getElementById("passworderror").classList.add("hide");
    }

    if(password != confirmPassword){
        document.getElementById("passwordconfirmerror").classList.remove("hide");
        return false;
    }else{
        document.getElementById("passwordconfirmerror").classList.add("hide");
    }

    

    if(!agreement){
        document.getElementById("Agreeerror").classList.remove("hide");
        return false;
    }else{
        document.getElementById("Agreeerror").classList.add("hide");
    }

    alert("your details has been successfully submitted");
};