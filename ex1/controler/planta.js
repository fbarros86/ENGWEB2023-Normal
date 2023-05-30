var Planta = require('../models/planta')

// Planta list
module.exports.list = () =>{
    return Planta.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getPlanta = id =>{
    return Planta.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.especieList = especie =>{
    return Planta.find({"Espécie":especie})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.implantacaoList = implantacao =>{
    return Planta.find({"Implantação":implantacao})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.freguesiasList = () =>{
    return Planta.distinct("Freguesia").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.allEspeciesList = () =>{
    return Planta.distinct("Espécie").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}



module.exports.addPlanta = (planta) => {
    return Planta.collection.insertOne(planta)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }


module.exports.deletePlanta = id =>{
    return Planta.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
