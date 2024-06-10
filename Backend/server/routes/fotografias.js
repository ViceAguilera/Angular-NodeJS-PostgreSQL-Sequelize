const fotografiaController = require('../controllers').fotografias;
const md_auth = require('../auth/auth');
const cm = require('connect-multiparty');
const md_upload = cm({uploadDir: './server/uploads/fotografias'});

module.exports = (app) => {
    app.post('/api/fotografia', md_auth.auth, fotografiaController.create);
    app.put('/api/fotografia/:id', md_auth.auth, fotografiaController.update);
    app.post('/api/upload-fotografia/:id', [md_auth.auth, md_upload], fotografiaController.uploadFotografia);
    app.get('/api/get-fotografia/:fotografia/:thumb', fotografiaController.getFotografia);
    app.get('/api/fotografias', fotografiaController.getAll);
    app.get('/api/fotografias-admin', md_auth.auth, fotografiaController.getAllAdmin);
    app.get('/api/fotografia/:id', fotografiaController.getById);
}