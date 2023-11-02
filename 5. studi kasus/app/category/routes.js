const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const categoryController = require('./controller');

// post
router.post('/category', categoryController.store);
// edit
router.put('/category/:id', categoryController.update);
// delete
router.delete('/category/:id', categoryController.destroy);
// liat
router.get('/category', categoryController.index);
// detail
router.get('/category/:id', categoryController.detail);

module.exports = router;
