function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "mobile-nav") {
    x.className += " responsive";
  } else {
    x.className = "mobile-nav";
  }
}