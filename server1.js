import express from "express";

const app = express();



app.get("/", (req, res) => {
    res.send("Bem vindo a sesitech")
});

app.get("/sobre", (req, res) => {
    res.send("A empresa sesitech foi criada em 2025 com o objetivo de trazer soluções tecnologicas")
});

app.listen(3000, ()=>{
    console.log("servidor rodando na 3000 ")
});