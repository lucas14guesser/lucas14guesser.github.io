const configuracaoCarrossel = [
    {container: "img-pmsj"},
    {container: "img-mei"},
    {container: "img-adt"},
];

function iniciarCarrossel(container) {
    const imgsContainer = document.getElementById(container);
    const imgs = imgsContainer.querySelectorAll("img");
    
    let indiceImg = 0;

    function trocarImagem(indice) {
        indiceImg = (indice + imgs.length) % imgs.length;
        imgsContainer.style.transform = `translateX(${-indiceImg * 45}rem)`;
    }

    const btnAnterior = document.createElement("button");
    btnAnterior.textContent = "❮";
    btnAnterior.classList.add("btn-anterior");
    btnAnterior.addEventListener("click", () => trocarImagem(indiceImg - 1));

    const btnProximo = document.createElement("button");
    btnProximo.textContent = "❯";
    btnProximo.classList.add("btn-proximo");
    btnProximo.addEventListener("click", () => trocarImagem(indiceImg + 1));

    imgsContainer.parentElement.appendChild(btnAnterior);
    imgsContainer.parentElement.appendChild(btnProximo);
}

configuracaoCarrossel.forEach(configuracao => {
    iniciarCarrossel(configuracao.container);
});
