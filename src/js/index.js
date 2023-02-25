function copyToclipboard() {
  var val = "ariyurektuna@gmail.com";
  val = val.replace('"', "");
  navigator.clipboard.writeText(val);
}
// TODO Add Content Load Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".fadeanimated").classList.add("fadeInLeft");
    }
  });
});
observer.observe(document.querySelector(".container"));

var sticky = document.querySelector(".sticky");
if (sticky.style.position !== "sticky") {
  var stickyTop = sticky.offsetTop;

  document.addEventListener("scroll", function () {
    window.scrollY >= stickyTop
      ? sticky.classList.add("fixed")
      : sticky.classList.remove("fixed");
  });
}

/* 

var topButton = document.getElementById("topButton");

function scrollDisplay() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


window.onscroll = function() {scrollDisplay()};
*/
