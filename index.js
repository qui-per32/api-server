const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.get('/quienesomos', (req, res) => res.send("Quienes somos"));

app.get('/multiplica/:numero1/:numero2', (req, res) => {
    var numero1 = req.params.numero1;
    var numero2 = req.params.numero2;
    if (isNaN(numero1) === true || isNaN(numero2) === true) {
        res.send("debes meter un numero")
    } else {
        res.send('multiplica da ' + (numero1 * numero2));
    }



});
app.get('/junta/:nom/:nombre', (req, res) => {
    var name1 = req.params.nom;
    var name2 = req.params.nombre;
    res.send(`junta ${name1} con ${name2}`);
});

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(3000, () => console.log('Servidor levantado en 3000'));