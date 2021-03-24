const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('../app/View/links/inicio',{
        titulo: 'Trabajo 1 corte 2',
        src: 'https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png'
    });
});
router.get('/inicio', (req,res)=>{
    res.render('../app/View/links/inicio');
});
router.get('/nosotros', (req,res)=>{
    res.render('../app/View/links/nosotros');
});
router.get('/servicios', (req,res)=>{
    res.render('../app/View/links/servicio');
});
router.get('/clientes', (req,res)=>{
    res.send('Clientes');
});
router.get('/ingresar', (req,res)=>{
    res.render('../app/View/links/login');
});
router.get('/contactenos', (req,res)=>{
    res.send('contactenos');
});
router.get('/registro', (req,res)=>{
    res.send('registro');
});
module.exports = router;