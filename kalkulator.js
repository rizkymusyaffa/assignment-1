let calculated = false;
let operator = false;

function clr() {
    calculated = false;
    document.getElementById('display').value ="";

}
function clrback() {
    if(calculated === false){
        document.getElementById('display').value = document.getElementById('display').value.slice(0,-1);
    }
    
}

function display(value) {
    if(value==="+" || value ==="-" || value ==="*" || value ==="/"){
        calculated = false;
        if(calculated === false && operator === false){
            document.getElementById('display').value += value;
        }
        operator = true;
    } else{
        operator = false;
        if(calculated === false && operator === false){
            document.getElementById('display').value += value;
        }
    }
    
    
}

function calc() {
    var p = document.getElementById("display").value;
    var q = eval(p);
    calculated = true;
    document.getElementById("display").value = q;
}

