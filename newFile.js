var buttonPressed = false

const content = document.getElementsByClassName("content")
const headings = document.getElementById("heading1")

function myFunc() {
  if(buttonPressed == false) {
    buttonPressed = true
    
    var name = document.getElementById("taskBar");
    var text = document.querySelectorAll("a");

    content[0].style.paddingLeft = "0%"
    content[0].style.textAlign = "center"
    content[0].style.marginLeft = "3%"
    
    name.style.width = "3%";
    name.style.backgroundColor = "rgba(0, 0, 0, 0.65)"
    for (var i in text) {
      text[i].style.color = "rgba(255, 255, 255, 0)";
    }
  } 
  else {
    buttonPressed = false
    var name = document.getElementById("taskBar");
    var text = document.querySelectorAll("a");

    content[0].style.paddingLeft = "0%"
    content[0].style.textAlign = "center"
    content[0].style.marginLeft = "10%"

    name.style.width = "10%";
    for (var i in text) {
      text[i].style.color = "rgba(255, 255, 255, 1)";
    }
  }
  
}
