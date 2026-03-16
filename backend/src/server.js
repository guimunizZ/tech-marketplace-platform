const express = require("express")
const cors = require("cors")

const assistenciaRoutes = require("./routes/assistencia.routes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/assistencias", assistenciaRoutes)

app.get("/health", (req, res) => {
    res.send("API rodando 🚀")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 🚀")
})