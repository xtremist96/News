// // Page Elements
// const main = document.getElementsByTagName('main')[0];

// // News API Data

// const apiKey = 'd2faa35a90854fa3b824479d0affb3cf';
// const topNewsUrl = 'https://newsapi.org/v1/articles?source=the-next-web&apiKey=';

// // Request News Function

// async function getNews(url) {
//     let response = await fetch(url + apiKey);
//     let jsonResponse = await response.json();
//     let articlesArray = jsonResponse.articles.slice(0, 5);
//     console.log(jsonResponse);
//     return articlesArray;
// }

// // Render Function

// function renderNews(articles) {
//     articles.map((article, index) => {
//         console.log(article.author)
//         let articleRow =
//             '<div class="card mb-2">' +
//             '<div class="card-body">' +
//             '<a href="' + article.url + '" class="card-img">' +
//             '<img src="' + article.urlToImage + '" alt="" width="70" hei="70" >' +
//             '</a>' +
//             '<a href="' + article.url + '" class="card-content">' +
//             '<h4>' + article.title + '</h4>' +
//             '<h6>' + article.author + '</h6>' +
//             '</a>' +
//             '</div>' +
//             '</div>'
//         main.innerHTML += articleRow;
//     });
//     return articles;
// }


// main.innerHTML = ' ';
// getNews(topNewsUrl).then(articlesArray => renderNews(articlesArray));