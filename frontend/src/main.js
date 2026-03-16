const app = document.querySelector("#app")

app.innerHTML = `
<div style="font-family: Arial; background:#f4f6f8; min-height:100vh; padding:40px;">

<h1>🔧 Tech Marketplace</h1>

<h2>Cadastrar assistência</h2>

<input id="nome" placeholder="Nome da assistência"/>
<input id="especialidade" placeholder="Especialidade"/>
<button id="cadastrar">Cadastrar</button>

<h2>Assistências disponíveis</h2>

<div id="cards"></div>

</div>
`

const container = document.querySelector("#cards")

function carregarAssistencias(){

    fetch("http://localhost:3000/assistencias")
        .then(res => res.json())
        .then(lista => {

            container.innerHTML = ""

            lista.forEach(a => {

                container.innerHTML += `
   <div style="
   background:white;
   padding:20px;
   margin:10px;
   border-radius:8px;
   ">
   <h3>${a.nome}</h3>
   <p>${a.especialidade}</p>
   ⭐ ${a.nota}
   </div>
   `
            })

        })
}

carregarAssistencias()

document.querySelector("#cadastrar").addEventListener("click", ()=>{

    const nome = document.querySelector("#nome").value
    const especialidade = document.querySelector("#especialidade").value

    fetch("http://localhost:3000/assistencias",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            nome,
            especialidade
        })
    })
        .then(()=>{

            carregarAssistencias()

        })

})