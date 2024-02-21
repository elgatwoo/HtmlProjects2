var buttonPressed = false
var expanded = false
var hover = false

const content = document.getElementsByClassName("content")
const headings = document.getElementById("heading1")

const task = document.getElementById("taskBar");
const text = task.querySelectorAll("a");
const img = task.querySelector("img")

const converted = {

}

for(let i = 0; i < text.length; i++) {
  text[i].addEventListener('mouseover', function() {
    if(hover) {
      text[i].style.backgroundColor = "rgba( 10, 10, 10, 1 )"
    }
  })
  text[i].addEventListener('mouseleave', function() {
    text[i].style.backgroundColor = "rgba( 0, 0, 0, 0.35 )"
  })
  text[i].addEventListener('transitionend', function(){
    if(!expanded) {
      task.style.width = "3%"
      content[0].style.marginLeft = "3%"
    }
  })

  task.addEventListener('transitionend', function(){
    if(expanded) {
      text[i].style.color = "rgba(255, 255, 255, 1)"
      hover = true
    }
  })
}

img.addEventListener('mousedown', function() {
  if(!expanded) {
    task.style.width = "10%"
    content[0].style.marginLeft = "10%"
    expanded = true
  } 
  else {
    for(let i = 0; i < text.length; i++) {
      text[i].style.color = "rgba(255, 255, 255, 0)"
    }

    expanded = false
    hover = false
  }
})