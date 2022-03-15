//getting references
let item = document.getElementById("item");
let buttonOnclick = document.getElementById("add");
let ul = document.getElementById("list");
let err = document.querySelector(".error");

function addItem() {
    
    let val = item.value;
    val = val.trim();
    
    if (val.length !== 0) {
        
     err.textContent = "";

    let li = document.createElement("li");

    li.textContent = val;

    ul.appendChild(li);
    
    item.value = ""; item.focus();
        
    } else {
        err.textContent = "Nothing entered in the paragraph, try again";
    }
}

buttonOnclick.addEventListener("click", addItem);