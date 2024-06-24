const button1 = document.querySelector("#slot1");
const button2 = document.querySelector("#slot2");
const forwardButton = document.querySelector("#forwardSlot");
const container1 = document.querySelector("#firstSlot");
const container2 = document.querySelector("#secondSlot");

container1.style.display="flex";

button1.onclick = openFirstSlot;
button2.onclick = openSecondSlot;
forwardButton.onclick = forwardSlot;


function openFirstSlot() {
    container1.style.display = "flex";
    container2.style.display = "none";
}

function openSecondSlot(){
    container1.style.display = "none";
    container2.style.display = "flex";
}

function forwardSlot(){
    if(container1.style.display == "flex"){
        container1.style.display = "none";
        container2.style.display = "flex";
    } else if (container2.style.display == "flex"){
        container1.style.display = "flex";
        container2.style.display = "none";
    }
}

