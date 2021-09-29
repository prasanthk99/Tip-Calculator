var bin;
var pin;
var tips;

//Selecting Tips

var bselected = 0;
var selected = (tip) => {
    tips = tip;
    if(pin!=""&&bin!=""){
        if(tips==1){
            document.querySelector(".tip-"+bselected).classList.remove("selected");
        }
        else{
            document.querySelector(".tip-"+tips).classList.add("selected");
            document.querySelector(".Custom").value = "";
        }    

        if(bselected>1&&tips!=bselected){
            document.querySelector(".tip-"+bselected).classList.remove("selected");
        }
        
        bselected = tips;
    }
    else{
        document.querySelector(".tip-"+bselected).classList.remove("selected");
    }
    
}

// Finding-Total

function findtotal(tipvalue){
    bin = document.querySelector(".Bill-input").value;
    pin = document.querySelector(".Numpeople-input").value;

    if(bin!=""&&pin!=""){
        var sum = (parseFloat(bin)/parseFloat(pin));
        if(tipvalue>0){
            tips = parseInt(tipvalue);
        }
        var tipamt = (sum/100)*tips;
        sum = sum + tipamt;
        document.getElementsByClassName("total-amt")[0].textContent = "$"+parseFloat(sum).toFixed(2);
        document.getElementsByClassName("tip-amt")[0].textContent = "$"+parseFloat(tipamt).toFixed(2);
    }
    else{
        document.getElementsByClassName("total-amt")[0].textContent = "$0.00";
        document.getElementsByClassName("tip-amt")[0].textContent = "$0.00";

    }
    if(bin!=""&&pin!=""){
        var restbtn =  document.querySelector(".rbtn");
        restbtn.classList.add("rbtnafterenable");
        
        restbtn.removeAttribute("Disabled");
        restbtn.setAttribute("Enabled","");

    }
    else{
        document.querySelector(".rbtn").removeAttribute("Enabled");
        document.querySelector(".rbtn").setAttribute("Disabled","");
        document.querySelector(".rbtn").classList.remove("rbtnafterenable");
        
    }

}  

// Reset Function

var reset = () =>{
    document.getElementsByClassName("total-amt")[0].textContent = "$0.00";
    document.getElementsByClassName("tip-amt")[0].textContent = "$0.00";
    document.querySelector(".Bill-input").value = "";
    document.querySelector(".Numpeople-input").value = "";
    document.querySelector(".rbtn").setAttribute("Disabled","")
    document.querySelector(".rbtn").classList.remove("rbtnafterenable");
    document.querySelector(".Custom").value = "";
    document.querySelector(".tip-"+bselected).classList.remove("selected");
    tips = 0;
}

var blank = () =>{
    var bin = document.querySelector(".Bill-input");
    var pin = document.querySelector(".Numpeople-input");
    if(pin.value==""){
        document.querySelector(".warning").textContent = "It cannot be zero!";
        pin.style.border = "1px solid red"
    }
    else{
        document.querySelector(".warning").textContent = "";
        pin.style.border = "none"

    }
    
}

// Checking input Blank

var checkingBlank = () => {
    if(bin==""||pin==""){
        document.querySelector(".tip-"+bselected).classList.remove("selected");
        tips=0;
    }
}

setInterval(checkingBlank,300);



