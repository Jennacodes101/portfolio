
// Get the query parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const tabName = urlParams.get('tab');

  if (tabName) {
    // Get the tab element with the corresponding name
    console.log(tabName)
    document.getElementById(tabName).click();
  }
  else {
    console.log("defaultOpen")
    document.getElementById("dejavuOpen").click();
  }

  function openProject(evt, projectName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  console.log("here")

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("projectcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " active";
  }
