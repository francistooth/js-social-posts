const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postContainer = document.getElementById("container");

var today = new Date();

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

function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   }