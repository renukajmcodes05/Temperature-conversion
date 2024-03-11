const ip= document.getElementById("ip");
const tof=document.getElementById("tof");
const toc=document.getElementById("toc");
const op=document.getElementById("op");

let result;

function convert(){

    if(toc.checked){
        result=Number(ip.value);
        result=result* 9/5 +32;
        op.textContent=result.toFixed(1) + "℃";  
    }
    else if(tof.checked){
        result=Number(ip.value);
        result=(result-32)* 5/9;
        op.textContent=result.toFixed(1) + "℉";  
    }
    else{
        op.textContent= "Select a unit";
    }
}