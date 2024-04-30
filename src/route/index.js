const express = require('express');
const router = express.Router();
const service = require('../server/index');

router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.get('/login', service.login);
router.get('/getUserInfo',service.getUserInfo);
router.post('/editUserInfo',service.editUserInfo);
router.post('/add',service.add);
router.get('/list',service.list);
router.get('/detail',service.detail);
router.post('/update',service.update);
router.get('/delete',service.$delete);

router.use(function(req, res) {
    response.status(404).send("Page not found!");
});

module.exports = router;