
function removeClassOnSmallScreen() {
  var screenWidth = window.innerWidth;

  var myDiv = document.getElementById("projectNav");
  console.log(myDiv)
  if (screenWidth < 980) {
    myDiv.classList.remove("stacked");
    myDiv.classList.add("align-center");
  } else {
    myDiv.classList.add("stacked");
  }
}

window.addEventListener("resize", removeClassOnSmallScreen);
