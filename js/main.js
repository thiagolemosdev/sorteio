(function () {
  const invalido = () => {
    const div = document.querySelector(".resultado");
    const h1 = document.createElement("h1");
    h1.innerHTML = `Os numero não podem ficar em branco`;
    div.appendChild(h1);
  };

  const resultado = (min, max, i) => {
    const numSorteado = Math.floor(Math.random() * (max - min) + min);
    const div = document.querySelector(".resultado");
    const p = document.createElement("p");
    p.innerHTML = `${i + 1}˚ Sorteado <span>${numSorteado}</span>`;
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
      if (
        numeroMaximoSorteio === "" ||
        numeroMinimoSorteio === "" ||
        quantidadeNumerosSorteados === ""
      ) {
        invalido();
      } else {
        const div = document.querySelector(".resultado");
        div.innerHTML = "";
        for (var i = 0; i !== quantidadeNumerosSorteados; i++) {
          resultado(numeroMinimoSorteio, numeroMaximoSorteio, i);
        }
      }
      document.querySelector(".min").value = "";
      document.querySelector(".max").value = "";
      document.querySelector(".quantidade-numeros").value = "";
    }
  });
})();
