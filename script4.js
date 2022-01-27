const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newBtn');


// get quote from API

async function getQuote()
{
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json' ;

    try
    {
      const responce = await fetch(proxyUrl + apiUrl);
      const data = await responce.json();
      authorText.innerText = data.quoteAuthor;
      quoteText.innerText = data.quoteText;
    }
    catch (error)
    {
      getQuote();
      console.log('sorry , try again',error);
    }
}

function tweetQu()
{
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl,'_blank');
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click',tweetQu);

  getQuote();
