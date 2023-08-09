


// option 1 match class name 
//


// Code snippet that toggles skills highlight
// goal is to add a class on the clicked element then remove class on the current element

var currentDivList = document.getElementById("project-info-list");
var divs = currentDivList.getElementsByClassName("project-info");
var btnContainer = document.getElementById("project-category");
var btns = btnContainer.getElementsByTagName("a");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    document.querySelector('.button-active')?.classList.remove('button-active');
    this.classList.add('button-active');
    document.querySelector('.shown')?.classList.remove('shown');
    divs[i].classList.add('shown');
  });
}




