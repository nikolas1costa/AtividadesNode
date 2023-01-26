const express = require('express')
const router = express.Router();
router.get('/posts/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send("slug do post: " + slug)
});

router.get('/rota1', (req, res) => {
    res.send("Página sobre rota 1")
});

router.get('/rota2', (req, res) => {
    res.json(req.query)
    
});

module.exports = router;