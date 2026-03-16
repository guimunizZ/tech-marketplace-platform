const express = require("express")
const router = express.Router()

let assistencias = [
    { id:1, nome:"Carlos Tech", especialidade:"Celular", nota:4.8 },
    { id:2, nome:"Fix Notebook", especialidade:"Notebook", nota:4.5 }
]

router.get("/", (req,res)=>{
    res.json(assistencias)
})

router.post("/", (req,res)=>{

    const novaAssistencia = {
        id: assistencias.length + 1,
        nome: req.body.nome,
        especialidade: req.body.especialidade,
        nota: 5
    }

    assistencias.push(novaAssistencia)

    res.json(novaAssistencia)
})

module.exports = router