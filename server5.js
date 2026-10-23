import express from "express";
const app = express();

app.use(express.json());

let tarefas = [
    { id: 1, descricao: 'Estudar JavaScript' },
    { id: 2, descricao: 'Fazer atividade de Express' }
];


app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});


app.get('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        });
    }

    res.json(tarefa);
});


app.post('/tarefas', (req, res) => {
    const novaTarefa = {
        id: tarefas.length > 0
            ? Math.max(...tarefas.map(t => t.id)) + 1
            : 1,
        descricao: req.body.descricao
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});


app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = tarefas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        });
    }

    const tarefaRemovida = tarefas.splice(indice, 1);

    res.json({
        mensagem: 'Tarefa removida com sucesso',
        tarefa: tarefaRemovida[0]
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});