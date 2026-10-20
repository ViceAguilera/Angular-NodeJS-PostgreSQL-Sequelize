const fotografia = require('../models').fotografias;
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

function create(req, res){
    var body = req.body;
    fotografia.create(body)
    .then(fotografia => {
        res.status(200).send({fotografia})
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
}

function update(req, res){
    var id = req.params.id;
    var body = req.body;

    fotografia.findByPk(id)
    .then(fotografia => {
        fotografia.update(body)
        .then(() => {
            res.status(200).send({fotografia})
        })
        .catch(err => {
            res.status(500).send({message: 'Ocurrió un error al actualizar la fotografía'})
        })
    })
    .catch(err => {
        res.status(500).send({message: 'Ocurrió un error al buscar la fotografía'})
    })
}

function uploadFotografia(req, res){
    var id = req.params.id;
    if(!req.file){
        return res.status(400).send({message: 'Debe seleccionar una imagen válida (png, jpg, jpeg).'})
    }
    var file_path = req.file.path;
    var file_name = req.file.filename;
    var foto = {imagen: file_name};

    fotografia.findByPk(id)
    .then(fotografia => {
        fotografia.update(foto)
        .then(() => {
            var thumbPath = './server/uploads/fotografias/thumbs/';
            fs.promises.mkdir(thumbPath, {recursive: true})
            .then(() => sharp(file_path).resize({width: 200}).toFile(path.join(thumbPath, file_name)))
            .then(() => {
                res.status(200).send({fotografia})
            })
            .catch(err => {
                res.status(500).send({message: 'Ocurrió un error al crear el thumbnail.' + err.message})
            })
        })
        .catch(err => {
            res.status(500).send({message: 'Ocurrió un error al actualizar la fotografía.' + err.message})
        })
    })
    .catch(err => {
        fs.unlink(file_path, () => {})
        res.status(500).send({message: 'Ocurrió un error al buscar la fotografía.' + err.message})
    })
}

function getFotografia(req, res){
    var fotografia = req.params.fotografia;
    var thumb = req.params.thumb;

    if(thumb == 'false'){
        var path_foto = './server/uploads/fotografias/' + fotografia;
    }else{
        var path_foto = './server/uploads/fotografias/thumbs/' + fotografia;
    }

    fs.exists(path_foto, (exists) => {
        if(exists){
            res.sendFile(path.resolve(path_foto));
        }else{
            res.status(404).send({message: 'La fotografía no existe.'})
        }
     })
}

function getAll(req, res){
    fotografia.findAll({
        where: {
            activo: true
        },
        order: [
            ['numero', 'ASC']
        ]
    })
    .then(fotografias => {
        res.status(200).send({fotografias})
    })
    .catch(err => {
        res.status(500).send({message: 'Ocurrió un error al buscar las fotografías.'})
    })
}

function getAllAdmin(req, res){
    fotografia.findAll({
        order: [
            ['numero', 'ASC']
        ]
    })
    .then(fotografias => {
        res.status(200).send({fotografias})
    })
    .catch(err => {
        res.status(500).send({message: 'Ocurrió un error al buscar las fotografías.'})
    })
}

function getById(req, res){
    var id = req.params.id;
    fotografia.findByPk(id)
    .then(fotografia => {
        res.status(200).send({fotografia})
    })
    .catch(err => {
        res.status(500).send({message: 'Ocurrió un error al buscar una fotografía.'})
    })
}

module.exports = {
    create,
    update,
    uploadFotografia,
    getFotografia,
    getAll,
    getAllAdmin,
    getById
}