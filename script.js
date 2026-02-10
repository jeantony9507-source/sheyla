// activar musica
document.body.onclick = () => {
  document.getElementById("musica").play();
};

// texto
const texto = "Sheyla, eres el lugar donde siempre quiero estar ❤️";
let i = 0;
const dedicatoria = document.getElementById("dedicatoria");

function escribir() {
  if (i < texto.length) {
    dedicatoria.innerHTML += texto[i];
    i++;
    setTimeout(escribir, 50);
  }
}
escribir();

// contador simple
const inicio = new Date("2023-10-28");
setInterval(() => {
  const ahora = new Date();
  const diff = ahora - inicio;
  document.getElementById("contador").innerText =
    Math.floor(diff / (1000*60*60*24)) + " días juntos ❤️";
}, 1000);

// boton
btnSorpresa.onclick = () => {
  sorpresa.style.display = "block";
};

btnSi.onclick = () => {
  mensajeFinal.innerHTML = "Gracias mi amor, Te amo hoy y siempre 💖";
};

btnNo.onclick = () => {
  mensajeFinal.innerHTML = "Esto me pone triste, pero seguiré luchando por ser tu San Valentín lo prometo ❤️";
};
// 🌸 Pétalos de corazón cayendo del árbol
const arbol = document.querySelector(".arbol");

function soltarPetalo() {
  const petalo = document.createElement("div");
  petalo.className = "petalo";
  petalo.innerText = "❤️";

  const x = Math.random() * 120 + 50; // ancho de la copa
  petalo.style.left = x + "px";

  arbol.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 5000);
}

// cada 700ms cae un corazón

setInterval(soltarPetalo, 700);
