var buttonPressed = true

const content = document.getElementsByClassName("content")
const headings = document.getElementById("heading1")

const task = document.getElementById("taskBar");
const text = task.querySelectorAll("a");

const converted = {

}

for(let i = 0; i < text.length; i++) {
  text[i].addEventListener('mouseover', function() {
    if(buttonPressed == false) {
      text[i].style.backgroundColor = "rgba( 10, 10, 10, 1 )"
    }
  })
  text[i].addEventListener('mouseleave', function() {
    text[i].style.backgroundColor = "rgba( 0, 0, 0, 0.35 )"
  })
  text[i].addEventListener('transitionend', function(){
    if(buttonPressed) {
      text[i].style.visibility = "hidden"
    }
  })
}

function myFunc() {
  if(buttonPressed == false) {
    buttonPressed = true

    content[0].style.paddingLeft = "0%"
    content[0].style.textAlign = "center"
    content[0].style.marginLeft = "3%"
    
    task.style.width = "3%";
    task.style.backgroundColor = "rgba(0, 0, 0, 0.65)"
    for (let i = 0; i < text.length; i++) {
      text[i].style.transition = "color 0.15s"
      text[i].style.color = "rgba(255, 255, 255, 0)";
      
      
    }
  } 
  else {
    buttonPressed = false

    content[0].style.paddingLeft = "0%"
    content[0].style.textAlign = "center"
    content[0].style.marginLeft = "10%"

    task.style.width = "10%";
    for (let i = 0; i < text.length; i++) {
      text[i].style.visibility = "visible"
      text[i].style.transition = "color 1.25s 0.15s"
      text[i].style.color = "rgba(255, 255, 255, 1)";
      
    }
  }
  
}
