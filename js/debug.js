// creo gli elementi in pagina dinamicamente utilizzando l'array

posts.forEach((element) => {
   // main div

   const post = document.createElement("div");
   post.classList.add("post");

   // header

   const postHeader = document.createElement('div');
   postHeader.classList.add("post__header");

   // post meta

   const postMeta = document.createElement('div');
   postMeta.classList.add("post-meta");

   // meta icon

   const metaIcon = document.createElement('div');
   metaIcon.classList.add("post-meta__icon");

   // meta img

   const metaImg = document.createElement('img');
   metaImg.classList.add("profile-pic");

   metaImg.src = element.author.image;
   metaImg.alt = element.author.name;

   // meta data

   const metaData = document.createElement('div');
   metaImg.classList.add("post-meta__data");

   // data author

   const dataAuthor = document.createElement('div');
   dataAuthor.classList.add("post-meta__author");
   dataAuthor.innerHTML = element.author.name;

   // data time

   const dataTime = document.createElement('div');
   dataTime.classList.add("post-meta__time");

   let timeDiff = monthDiff(new Date(element.created), today); 

   dataTime.innerHTML = `${timeDiff} mesi fa`;

   // appends

   metaIcon.appendChild(metaImg);
   
   postMeta.appendChild(metaIcon);

   metaData.appendChild(dataAuthor);
   metaData.appendChild(dataTime);

   postMeta.appendChild(metaData);

   postHeader.appendChild(postMeta);

   post.appendChild(postHeader);

   // text

   const postText = document.createElement('div');
   postHeader.classList.add("post__text");

   postText.innerHTML = element.content;

   // appends

   post.appendChild(postText);

   // post image

   const postImgDiv = document.createElement('div');
   postHeader.classList.add("post__image");

   const postMedia = document.createElement('img');

   postMedia.src = element.media;

   // appends

   postImgDiv.appendChild(postMedia);

   post.appendChild(postImgDiv);

   // footer

   // post.appendChild(postFooter);
   
   postContainer.appendChild(post);
});