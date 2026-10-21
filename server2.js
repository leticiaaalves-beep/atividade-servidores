import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Bem vindo! aqui você encontra diversos cursos")
});

app.get("/cursos", (req, res) => {
    res.send("os cursos disponiveis são: Programação de aplicativos, Banco de dados e Lógica de programação")
});

app.get("/professores", (req, res) => {
    res.send("professores: Samuel e Willer")
});

app.get("/contato", (req, res) => {
    res.send("Entre em contato com a gente! (48)999999999")
});

app.listen(3000, ()=>{
    console.log("servidor rodando na 3000 ")
});