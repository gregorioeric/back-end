import express from "express";

const router = express.Router();

router.get('/newArticle', (req, res) => {
    res.render('articles/newArticle');
});

router.post('/', (req, res) => {

});

export default router;