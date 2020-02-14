// url da api com a chave
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=br&' +
          'apiKey=174d97dbac7a44f2b7271e96fbc2c090';
// var req = new Request(url);

// controller
function fetchNews() {
    fetch(url)
    .then(function(response) {
        response.json().then(function(response){
            writeNews(response);
        });
    })
    .catch(function(){
        console.log("deu ruim")
    })
}

// view
function writeNews(response) {
    let list = "<ul>";
    for(let i = 0; i < response.articles.length; i++) {
        let article = response.articles[i];
        list += "<li>" + 
                "<strong>" + article.author + "</strong> " +
                article.description + "</li>";
    }
    list += "</ul>";
    
    // let position = Math.ceil((Math.random()*10));
    let news = document.querySelector('#news');
    news.innerHTML = list;
}

document.querySelector('#button').onclick = fetchNews

