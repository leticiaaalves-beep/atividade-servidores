import express from "express";
const app = express();


const produtos = [
    {id: 1, nome:'Iphone 14', preco:2500.00},
    {id: 2, nome:'Iphone 17', preco:6000.00},
    {id: 3, nome:'Notebook', preco:3600.00},
    {id: 4, nome:'Iphone 16', preco:3700.00},
    {id: 5, nome:'Mouse', preco:150.00}
];

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    res.json(produto);
});

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
});