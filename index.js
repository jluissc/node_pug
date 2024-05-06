import express from "express";
import { addContacto, deleteContacto, getContactos } from './src/mysql_conector.js';

const app = express();

app.listen('8000',()=>{
    console.log('iniciando en el puerto 8000');
});

// config de PUG
app.set('views', './vistas');
app.set('view engine', 'pug');

// config de archivos estaticos
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./css'));

app.get('/', async (req, res) => {
    try {
        const datos = await getContactos();
        console.log(datos);
        res.render('index', {
            datos: datos,
            titulo: 'Aplicacion de contactos',
            p: 'Hola parametro'
        });
    } catch (error) {
        console.error('Error al obtener los contactos:', error);
        res.status(500).send('Error al obtener los contactos');
    }
});
app.get('/agregar/:nombre/:numero', (req, res) => {
    let nombre = req.params.nombre;
    let numero = req.params.numero;
    console.log(numero, nombre);
    addContacto(nombre, numero);

    res.redirect('/');
})
app.get('/delete/:agenda', (req, res) => {
    let id = req.params.agenda;
    deleteContacto(id);

    res.redirect('/');
})