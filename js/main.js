(function () {
  const quantidadeNumerosSorteados = document.querySelector(
    ".quantidade-numeros"
  ).value;

  const botaoSortear = document.querySelector(".sortear");

  const resultado = (min, max) => {
    console.log(min, max);
  };

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("sortear")) {
      const numeroMinimoSorteio = document.querySelector(".min").value;
      const numeroMaximoSorteio = document.querySelector(".max").value;
      resultado(numeroMinimoSorteio, numeroMaximoSorteio);
    }
  });
})();
