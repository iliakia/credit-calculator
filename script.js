let totalValue = document.querySelector(".p-total-value");
const button = document.querySelector(".button");
button.onclick = function(){
    if(document.querySelector("#price").value>99 && document.querySelector("#price").value<50001 && document.querySelector("#time").value>5 && document.querySelector("#time").value<121){
        let total = document.querySelector("#price").value*(1+(document.querySelector("#time").value/30));
        totalValue.innerHTML = total.value;
    }
    else{
        alert("Введите корректные данные");
    }
}
    
