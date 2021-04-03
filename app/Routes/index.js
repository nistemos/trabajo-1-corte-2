const express = require('express');
const router = express.Router();
const routeController = require('../Controller/route.controller');

router.get('/', (req,res)=>{
    res.render('../app/View/links/inicio',{
        titulo: 'Trabajo 1 corte 2'
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
/*router.get('/ingresar', (req,res)=>{
    res.render('../app/View/links/login');
});*/
router.get('/ingresar', routeController.Grill_01.CGrill01);
router.get('/contactenos', (req,res)=>{
    res.send('contactenos');
});
router.get('/registro', (req,res)=>{
    res.send('registro');
});
module.exports = router;