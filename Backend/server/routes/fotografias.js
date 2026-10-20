const fotografiaController = require('../controllers').fotografias;
const md_auth = require('../auth/auth');
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const upload = multer({
    storage: multer.diskStorage({
        destination: './server/uploads/fotografias',
        filename: (req, file, cb) => {
            cb(null, crypto.randomBytes(18).toString('base64url') + path.extname(file.originalname).toLowerCase());
        }
    }),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, ['.png', '.jpg', '.jpeg'].includes(ext));
    }
});
const md_upload = upload.single('foto');

module.exports = (app) => {
    app.post('/api/fotografia', md_auth.auth, fotografiaController.create);
    app.put('/api/fotografia/:id', md_auth.auth, fotografiaController.update);
    app.post('/api/upload-fotografia/:id', [md_auth.auth, md_upload], fotografiaController.uploadFotografia);
    app.get('/api/get-fotografia/:fotografia/:thumb', fotografiaController.getFotografia);
    app.get('/api/fotografias', fotografiaController.getAll);
    app.get('/api/fotografias-admin', md_auth.auth, fotografiaController.getAllAdmin);
    app.get('/api/fotografia/:id', fotografiaController.getById);
}