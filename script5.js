// jshint esversion:8

const imgCon = document.getElementById('img-container');

let ready = false;
let imagesLoaded = 0 ;
let totalImg = 0 ;
let photosArray = [];

const count = 30;
const accessKey = 'ICzqexni21TbLz_UHzUlz7Wd0OhRHBeiqI1SK8ncstA' ;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}` ;

function imageLoaded()
{
  imagesLoaded++ ;
  if (imagesLoaded === totalImg)
  {
    ready = true ;
  }
}

function dispayPhotos()
{

  imagesLoaded = 0;
  totalImg = photosArray.length;

  photosArray.forEach((photo) =>
  {
      const item = document.createElement('a');
      item.setAttribute('href',photo.links.html);
      item.setAttribute('target','_blank');

      const img = document.createElement('img');
      img.setAttribute('src',photo.urls.regular);
      img.setAttribute('alt',photo.alt_description);

      img.addEventListener('load', imageLoaded);

      item.appendChild(img);
      imgCon.appendChild(item);
  }) ;
}


async function getPhotos()
{
    try
    {
      const responce = await fetch(apiUrl);
      photosArray = await responce.json();
      dispayPhotos();
    }
    catch (error)
    {
      console.log('sorry , try again',error);
    }
}

window.addEventListener('scroll', () =>
{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready)
    {
      ready = false;
      getPhotos();
      console.log('load more');
    }
});



getPhotos();
