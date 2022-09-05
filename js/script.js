const myList = document.getElementsByTagName("li");

//here we are going through each list item by accessing the elements through getElementsByTagName above
for (let i = 0; i < myList.length; i++) {
    const span = document.createElement("span");
    const symbol = document.createTextNode("\u00D7");
    span.className = "delete";
    // className assigns class, creating it here
    span.appendChild(symbol);
    myList[i].appendChild(span);
    // adding span to all of list elements
}

//implement delete functionality
const remove = document.getElementsByClassName("delete");

for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function(){
        const hide = this.parentElement;
        hide.style.display = "none";
    }
}

const list = document.querySelector("ul");
// this is another way to call elements

list.addEventListener("click",
    function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked")
        }
    },
    false
)

//implement input functionality

function newElement() {
    const task = document.createElement("li");
    const inputValue = document.getElementById("my-input").value;
    const addItem = document.createTextNode(inputValue);
    task.appendChild(addItem);
    // adding whatever our input was to li

    if (inputValue === "") {
        alert("Oops, you must type something!");
    } else {
        document.getElementById("my-list").appendChild(task);
    }

    document.getElementById("my-input").value = "";
    // makes input bar blank after adding a task

    //add the deleting functionality to the new list item

    const span = document.createElement("SPAN");
    const symbol = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(symbol);
    task.appendChild(span);
  
    for (i = 0; i < remove.length; i++) {
      remove[i].onclick = function () {
        const hide = this.parentElement;
        hide.style.display = "none";
      };
    }
    // lines 56-67 are within function
}
