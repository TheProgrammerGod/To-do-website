const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter")
        addItem();
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkButton = document.createElement("button");
    checkButton.innerHTML = "Check";
    var checkState = false;
    checkButton.style.backgroundColor = "white";
    checkButton.style.border = "1px solid gray";
    checkButton.style.borderRadius = "5px";
    var trashButton = document.createElement("button");
    trashButton.innerHTML = "Delete";
    trashButton.style.backgroundColor = "white";
    trashButton.style.borderRadius = "5px";
    trashButton.style.border = "1px solid gray";



    divParent.className = "item";
    divParent.innerHTML = "<div>" + input.value + "</div>";
    checkButton.style.color = "black";
    checkButton.addEventListener("click", ()=>{
        //checkButton.style.color = "limegreen";
        if(checkState == false){
        checkButton.style.backgroundColor = "limegreen";
        checkButton.style.border = "1px solid limegreen";
        checkState = true;
        }
        else {
            checkButton.style.backgroundColor = "white";
            checkButton.style.border = "1px solid gray";
            checkState = false;
        }
    })

    divChild.appendChild(checkButton);

    trashButton.style.color = "black";
    trashButton.addEventListener("click", ()=>{
        divParent.remove();
    })

    divChild.appendChild(trashButton);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = "";
}