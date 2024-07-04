const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = 'fc1037af1e2d45e28f055d296531586e';

const getApiData = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`);
        return response.data.articles.map(article => ({
            title: article.title,
            author: article.author,
            publishedAt: article.publishedAt,
            imageUrl: article.urlToImage
        }));
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return empty array in case of error
    }
};

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (req, res) => {
    try {
        const data = await getApiData();
        res.render('index', {
            one: "this is one", // 이 부분을 확인하고 있음
            two: "this is two", // 이 부분을 확인하고 있음
            data: data
        });
    } catch (error) {
        console.error('Error rendering index:', error);
        res.status(500).send('Internal Server Error');
    }
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
