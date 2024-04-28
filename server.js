import express from 'express';
import router from './routes/articles.js';

const app = express();
const port = 4500;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use('/articles', router);

app.get('/', (req, res) => {
    const articles = [{
        title: 'Titulo do Artigo',
        createDate: new Date(),
        description: 'Colocar inforção sobre o seu post ou artigo'
    }, {
        title: 'Titulo do Artigo 2',
        createDate: new Date(),
        description: 'Artigo 2'
    }];
    res.render('articles/index', { articles: articles });
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});