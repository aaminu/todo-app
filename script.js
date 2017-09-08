

// Creating a new task when the AddTask button is clicked
function newTask(){
  var li = document.createElement("li");
  var userInput = document.getElementById("myInput").value;
  var u = document.createTextNode(userInput);
  li.appendChild(u);
    if (userInput === ""){
      alert("You must enter a task!");
      } 
    else {
      document.getElementById('myUL').appendChild(li);
      }
    }

var task = document.querySelector("ul");
task.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI"){
    ev.target.classList.toggle("checked");
  }
}, false);