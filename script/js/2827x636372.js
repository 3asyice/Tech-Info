var x = document.getElementById('x');
var y = false;

function menu() {
  y = !y;
  x.style.display = y ?
    'block' : 'none';
}
window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("logado") !== "true") {
    
    setTimeout(() => {
      window.location.href =
        "https://3asyice.github.io/SixOhNine/script/login.html?redirect=" + encodeURIComponent(window.location.href);
    }, 500);
  } else {
    
    document.body.classList.add("ready");
  }
});

document.addEventListener("contextmenu", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});



// avoid printable screenshot

document.addEventListener("keyup", (e) =>{
navigator.clipboard.writeText('');
alert('Screenshot is disabled');
})