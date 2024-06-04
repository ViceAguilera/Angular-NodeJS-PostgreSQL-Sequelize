var nJwt = require('njwt');
var config = require('../config/config.json');
var secret = config.token_secret;

exports.createToken = (usuario) => {
    var params = {
        sub: usuario.id,
        usuario: usuario.id,
        id_rol: usuario.id_rol
    };
    var jwt = nJwt.create(params, secret);

    var t = new Date();
    t.setHours(t.getHours() + 2);
    jwt.setExpiration(t);

    var token = jwt.compact();

    return token;
};