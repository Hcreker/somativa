const express = require('express');
const app = express();
const path = require('path');

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'screens'));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/aboutme', (req, res) => {
    res.render('aboutme');
});

app.get('/aboutsenai', (req, res) => {
    res.render('aboutsenai');
});

app.get('/aboutcourse', (req, res) => {
    res.render('aboutcourse');
});

// Inicia servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
