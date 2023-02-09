function openSection(evt, sectionName) {
  // Declare all variables
  var i, sectionContent, sectionLinks;

  // Get all elements with class="tabcontent" and hide them
  sectionContent = document.getElementsByClassName("sectioncontent");
  for (i = 0; i < sectionContent.length; i++) {
    sectionContent[i].style.display = "none";
  }



  // Show the current tab, and add an "active" class to the button that opened the tab
  console.log(evt.currentTarget);
  if (evt.currentTarget.classList.contains("active")) {
    document.getElementById(sectionName).style.display = "none";
    evt.currentTarget.classList.remove("active");

  } else {
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
    

  }
}
