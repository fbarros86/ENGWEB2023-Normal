var express = require('express');
var router = express.Router();
var Planta = require('../controler/planta')

/* GET home page. */
router.get('/plantas', function(req, res, next) {
  if (req.query.especie){
    Planta.especieList(req.query.especie)
      .then(especies=>{
        res.json(especies)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de especies",error:erro })
      })
  }
  else if (req.query.implant){
    Planta.implantacaoList(req.query.implant)
      .then(implantacoes=>{
        res.json(implantacoes)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de implantações",error:erro })
      })
  }
  else{
    Planta.list()
      .then(plantas=>{
        res.json(plantas)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de plantas",error:erro })
      })
  }
});

router.get('/plantas/freguesias', function(req, res, next) {
  Planta.freguesiasList()
    .then(freguesias=>{
      res.json(freguesias)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter lista de freguesias",error:erro })
    })
});

router.get('/plantas/especies', function(req, res, next) {
  Planta.allEspeciesList()
    .then(especies=>{
      res.json(especies)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter lista de especies",error:erro })
    })
});

router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
    .then(planta=>{
      res.json(planta)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter planta",error:erro })
    })
});

router.post('/plantas', function(req, res, next) {
  Planta.addPlanta(req.body)
    .then(planta=>{
      res.status(201).json(planta)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar planta",error:erro })
    })
});


router.delete('/plantas/:id', function(req, res, next) {
  Planta.deletePlanta(req.params.id)
    .then(planta=>{
      res.json(planta)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar Planta",error:erro })
    })
});

module.exports = router;
