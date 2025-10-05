let valor = 0;
let historico = [];

const valorElemento = document.getElementById("valor");
const listaHistorico = document.getElementById("lista-historico");

function atualizarDisplay() {
  valorElemento.textContent = valor;
}

function atualizarHistorico() {
  historico.unshift(valor);
  if (historico.length > 5) {
    historico.pop();
  }
  listaHistorico.innerHTML = "";
  historico.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    listaHistorico.appendChild(li);
  });
}

document.getElementById("aumentar").addEventListener("click", () => {
  valor++;
  atualizarDisplay();
  atualizarHistorico();
});

document.getElementById("diminuir").addEventListener("click", () => {
  valor--;
  atualizarDisplay();
  atualizarHistorico();
});

document.getElementById("resetar").addEventListener("click", () => {
  valor = 0;
  atualizarDisplay();
  atualizarHistorico();
});

atualizarHistorico();
