var buttonPressed = false
var expanded = false
var hover = false

const content = document.getElementsByClassName("content")
const headings = document.getElementById("heading1")

const task = document.getElementById("taskBar");
const text = task.querySelectorAll("a");
const img = task.querySelector("img")

/*------------------------- TaskBar effects ---------------------*/
for (let i = 0; i < text.length; i++) {

  // hover effect
  text[i].addEventListener('mouseover', function() {
    if (hover) {
      text[i].style.backgroundColor = "rgba( 10, 10, 10, 1 )"
    }
  })
  text[i].addEventListener('mouseleave', function() {
    text[i].style.backgroundColor = "rgba( 0, 0, 0, 0.35 )"
  }) // hover effect end


  text[i].addEventListener('transitionend', function() {
    // when button pressed and the menu is out
    if (!expanded) {
      task.style.width = "5%"
      content[0].style.marginLeft = "5%"
      text[i].style.visibility = "hidden"
    }
  })
  // i wonder what this does
  task.addEventListener('transitionend', function() {
    if (expanded) {
      text[i].style.visibility = "visible"
      text[i].style.color = "rgba(255, 255, 255, 1)"
      hover = true
    }
  })
}

img.addEventListener('mousedown', function() {
  // when button pressed and the menu is out
  if (!expanded) {
    task.style.width = "10%"
    content[0].style.marginLeft = "10%"
    expanded = true
  }
  // when button pressed and the menu is out but not
  else {
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "rgba(255, 255, 255, 0)"
    }

    expanded = false
    hover = false
  }
})
