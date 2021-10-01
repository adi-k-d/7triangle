let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');


let multiplier;


let count = 0;

updateDisplay();





counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

function checkout() {
    let amtDue = count * multiplier;
    console.log(amtDue);

document.getElementById("total-amount").innerHTML = amtDue;

}

function fiveKgs(){
    multiplier = 209;
    document.getElementById("five_kgs").style.backgroundColor = "green";
    document.getElementById("five_kgs").style.color = "white";
}
function tenKgs(){
    multiplier = 399;
    document.getElementById("ten_kgs").style.backgroundColor = "green";
    document.getElementById("ten_kgs").style.color = "white";
}



