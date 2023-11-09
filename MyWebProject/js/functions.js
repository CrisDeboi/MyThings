document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("header-menu-icon");
  const sideMenu = document.getElementById("side-menu");

  menuIcon.addEventListener("click", function() {
    if (sideMenu.style.left === "0px" || !sideMenu.style.left) {
      sideMenu.style.left = "-550px"; 
    } else {
      sideMenu.style.left = "0px";    
    }
  });

  sideMenu.addEventListener("click", function() {
    sideMenu.style.left = "-550px";  
  });
});






