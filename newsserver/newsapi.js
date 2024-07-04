const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = 'fc1037af1e2d45e28f055d296531586e';

// Fetch data from News API
const getApiData = async (country, category = 'business') => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.articles.map(article => ({
            title: article.title,
            author: article.author,
            publishedAt: article.publishedAt,
            url: article.url,
            imageUrl: article.urlToImage
        }));
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return empty array in case of error
    }
};

app.set('view engine', 'ejs');
app.set('views', './views');

// Render news page
const renderNewsPage = async (res, country, viewName) => {
    try {
        const data = await getApiData(country);
        res.render(viewName, {
            one: "this is one",
            two: "this is two",
            data: data
        });
    } catch (error) {
        console.error(`Error rendering ${viewName}:`, error);
        res.status(500).send('Internal Server Error');
    }
};

// US news route
app.get('/', (req, res) => renderNewsPage(res, 'us', 'index'));

// Korean news route
app.get('/domestic', (req, res) => renderNewsPage(res, 'kr', 'domestic'));

const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
