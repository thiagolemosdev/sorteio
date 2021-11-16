(function () {
  const botaoSortear = document.querySelector(".sortear");

  const resultado = (min, max, i) => {
    const numSorteado = Math.floor(Math.random() * (max - min) + min);
    const div = document.querySelector(".resultado");
    const p = document.createElement("p");
    p.innerHTML= `<p>${i+1}˚ Sorteado <span>${numSorteado}</span> </p>`
    // `<p>${i++}˚ Sorteado <span>${numSorteado}</span> </p>`
    div.appendChild(p);
  };

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("sortear")) {
      const numeroMinimoSorteio = document.querySelector(".min").value;
      const numeroMaximoSorteio = document.querySelector(".max").value;
      const quantidadeNumerosSorteados = Number(
        document.querySelector(".quantidade-numeros").value
      );
      for (var i = 0; i !== quantidadeNumerosSorteados; i++) {
        resultado(numeroMinimoSorteio, numeroMaximoSorteio, i);
      }
    }
  });
})();
