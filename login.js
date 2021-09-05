let myInput = document.querySelectorAll(".form-control");

myInput.forEach(input => {
    input.onfocus = function() {
        //store the placeholder text on focus
        this.setAttribute('data-place', this.getAttribute('placeholder'));
        //elpty the placeholder text on focus
        this.setAttribute("placeholder", "");
    }
    input.onblur = function() {
        //store the placeholder text on focus
        this.setAttribute('placeholder', this.getAttribute('data-place'));
        //elpty the placeholder text on focus
        this.setAttribute("data-place", "");
    }
});

let showPass = document.getElementById("show-pass");

showPass.addEventListener("click", function() {
    let hidePass = document.getElementById("hide-pass");
    let myPassWord = document.getElementById("pass");
    let checkType = myPassWord.getAttribute("type");
    if(checkType === "password"){
        myPassWord.setAttribute("type", "text");
        this.style.display = "none";
        hidePass.style.display = "block"
        hidePass.addEventListener("click", function(){
            let myPassWord = document.getElementById("pass");
            let checkType = myPassWord.getAttribute("type");
            let showPass = document.getElementById("show-pass");
            if(checkType === "text"){
                myPassWord.setAttribute("type", "password")
                this.style.display ="none";
                showPass.style.display = "block";
            }
        })
    }
});