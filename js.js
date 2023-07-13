// window.addEventListener('load',()=>{
//     fetchNews("general");
// });

// async function fetchNews(query){
//     const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data=await res.json();
//     console.log(data);
//     bindData(data.articles);
// }

// function bindData(articles){
//     const cardContainer=document.getElementById('card-container');
//     const cardTemp=document.getElementById('template-news-card');
//     cardContainer.innerHTML="";
//     articles.forEach((article) => {
//         if(!article.urlToImage) return;
//         const cardClone=cardTemp.content.cloneNode(true);
//         fillDataInCard(cardClone,article);
//         cardContainer.appendChild(cardClone);
        
//     });
// }
// function fillDataInCard(cardClone, article){
//     const newsImg =cardClone.querySelector("#newsImg");
//     const title =cardClone.querySelector(".news-title");
//     const newsSource=cardClone.querySelector(".news-source");
//     const newsDesc=cardClone.querySelector(".news-desc");
//     newsImg.src=article.urlToImage;
//     title.innerHTML=article.title;
//     newsSource.innerHTML=`${article.author}${article.publishedAt}`
//     newsDesc.innerHTML=article.description;

// }