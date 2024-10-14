const inputddd = document.getElementById("ddd");
const form = document.querySelector("form")
const divResultado = document.querySelector(".resultado");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("formulário foi submetido")
    let ddd = inputddd.value;
    fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
    .then(dados => dados.json())
    .then(dados => {
        console.log(dados);
        const pEstado = document.createElement("p");
        const pCidades = document.createElement("p");
        pEstado.innerHTML = `Estado: ${dados.state}`;
        pCidades.innerHTML = `Cidades: ${dados.cities}`;
        divResultado.innerHTML = "";
        divResultado.appendChild(pEstado);
        divResultado.appendChild(pCidades);
    })
    .catch(erro => {
        console.log("erro");
        divResultado.innerHTML = "Não foi possível buscar este ddd. Tente novamente!";
    })
})
        


