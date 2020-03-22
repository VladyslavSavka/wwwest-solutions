export default class FakeNewsService {

    _url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-22&sortBy=publishedAt&apiKey=07a3cafb8ce84f41b47a49752ce7a995';
    
    getNews = async () => {

        const res = await fetch(this._url);

        const json = await res.json();

        const news = json.articles;

        return news;
    }
}