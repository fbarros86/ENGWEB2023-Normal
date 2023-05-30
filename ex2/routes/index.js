var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas")
    .then(dados=>{
      res.render('listaPlantas',{plantas:dados.data,d:data})
    })
    .catch(erro=>{
  
      res.render('error', { error: erro,message:"Erro a obter lista de plantas" });
    })
});

router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas?especie="+req.params.id)
      .then(dados=>{
        if (dados.data.length!=0) res.render('especie', { especies: dados.data, d:data });
        else res.render('error', { error: erro,message:"Não existe essa espécie" });
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter lista de plantas da espécie" });
      })

  
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas/"+req.params.id)
      .then(dados=>{
        res.render('planta', { planta: dados.data, d:data});
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter planta" });
      })

  
});

module.exports = router;
