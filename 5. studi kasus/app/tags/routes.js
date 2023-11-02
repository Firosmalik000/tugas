const router = require('express').Router();
const multer = require('multer');

const tagController = require('./controller');

// post
router.post('/tag', tagController.store);
// edit
router.put('/tag/:id', tagController.update);
// delete
router.delete('/tag/:id', tagController.destroy);
// liat
router.get('/tag', tagController.index);
// detail
router.get('/tag/:id', tagController.detail);

module.exports = router;
