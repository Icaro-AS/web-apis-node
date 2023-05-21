'use strict'

const mongoose = require('mongoose');
const repository = require('../repositories/product-repository');
const Product = mongoose.model('Product');


exports.get = async(req, res, next) => {
    try{
        const data = await repository.get();
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
        message: 'Falha ao processar a informação!!!'
        });
    }
}

exports.getBySlug = async(req, res, next) => {
    try{
        const data = await repository.getSlug(req.params.slug);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
        message: 'Falha ao processar a informação!!!'
    });
    }
}

exports.getById = async (req, res, next) =>{
    try{
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar a informação!!!'
        });
    }
}

exports.getByTag = async(req, res, next) => {
    try{
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar a informação!!!'
        });
    }
}

exports.post = async(req, res, next) => {
    try{
        await repository.post(req.body);
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    }catch(e){
    res.status(400).send({
        message: 'Falha ao processar a informação!!!'
    });
  }
};

exports.put = async(req, res, next) => {
    try{
        await repository.put(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch(e) {
        res.status(400).send({
            message: 'Falha ao processar a informação!!!'
        });
      }
};

exports.delete = async(req, res, next) => {
    try{
        await repository.delete({_id: req.body.id})
        res.status(200).send({
            message: 'Produto excluído: ' 
        });
    } catch(e) {
        res.status(400).send({
            message: 'Falha ao processar a informação!!!'
        });
    }
}
