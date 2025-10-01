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



// evita print
// cria overlay preto full-screen
const blackout = document.createElement('div');
blackout.style.position = 'fixed';
blackout.style.left = '0'; blackout.style.top = '0';
blackout.style.width = '100%'; blackout.style.height = '100%';
blackout.style.background = '#000';
blackout.style.zIndex = '999999';
blackout.style.display = 'none';
blackout.style.pointerEvents = 'none';
document.body.appendChild(blackout);

// função para piscar tela preta por X ms
function flashBlack(ms = 200) {
  blackout.style.display = 'block';
  setTimeout(()=> blackout.style.display = 'none', ms);
}

// tenta interceptar tecla PrintScreen
window.addEventListener('keyup', (e) => {
  // tecla 'PrintScreen' ou 'Print' ou código 44 (nem sempre consistente)
  if (e.key === 'PrintScreen' || e.key === 'Print' || e.keyCode === 44) {
    flashBlack(250); // pisca
    // opcional: mostrar notificação
    // showNotification("Captura de tela não permitida");
  }
});

// interceptar combinações comuns (ex.: Windows Snipping Tool ou atalhos)
window.addEventListener('keydown', (e) => {
  // exemplos: Ctrl+S, Ctrl+Shift+S, Meta+Shift+4 (macOS) etc — bloqueamos alguns
  if ( (e.ctrlKey && e.key === 'p') || (e.ctrlKey && e.key === 's') ) {
    e.preventDefault();
    flashBlack(250);
  }
});
