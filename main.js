const API_KEY = `f5e30bcb20854a82aa9f8be1b6193a6a`
let news = [];
const getLatestNews = async () => {
    const url = new URL(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
        );
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("dddd", news);
};

getLatestNews();