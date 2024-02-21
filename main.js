let newsList = [];
const getLatestNews = async () => {
  const url = new URL(
    `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`
  );
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log("ddddddd", newsList);
};

const render = () => {
  const newsHTML = newsList.map(
    (news) => `<div class="row news">
    <div class="col-lg-4">
     <img class="news-img-size" 
     src=${news.urlToImage}>

 </div>
 <div class="col-lg-8">
     <h2>코딩알려주는 누나 전격 수업 오픈하다!</h2>
     <p>
         ${news.description}
     </p>
     <div>
         ${news.source.name} * ${news.publishedAt}
     </div>

 </div> 
 </div> `
  )
  .join('');
  console.log("html", newsHTML);

  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();
