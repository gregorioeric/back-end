import express from 'express';
import router from './routes/articles.js';
// import { dirname, join, resolve } from 'path';

const app = express();
const port = 4500;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use('/articles', router);

app.get('/', (req, res) => {
    res.render('index', { articles: 'Programando back-end' });
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});