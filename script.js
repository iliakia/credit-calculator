const button = document.querySelector(".button");
button.onclick = function(){
    if(document.querySelector("#price").value>99 && document.querySelector("#price").value<50001 && document.querySelector("#time").value>0 && document.querySelector("#bid").value<50 && document.querySelector("#bid").value>0 &&document.querySelector("#time").value<101){ 
        let total = (document.querySelector("#price").value*1) + (document.querySelector("#price").value*(document.querySelector("#bid").value/100)*document.querySelector("#time").value);
        document.querySelector("#ptotalvalue").innerHTML = total;
        console.log(total);
        
    }
    else{
        alert("Введите корректные данные");
    }
}
const clear = document.querySelector(".clear");
clear.onclick = function(){
    document.querySelector("#price").value = "";
    document.querySelector("#time").value = "";
    document.querySelector("#bid").value = "";
    total=0;
    document.querySelector("#ptotalvalue").innerHTML = total;
}
    
