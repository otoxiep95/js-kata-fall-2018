let template = document.querySelector("template").content;
let tweets = document.querySelector(".tweets");

let endpoint = "https://kea-alt-del.dk/twitter/api/?count=100&?hashtag=KEA";

function fetchData() {
  fetch(endpoint)
    .then(e => e.json())
    .then(showTweets);
}

function showTweets(data) {
  console.log(data);
  data.statuses.forEach(showSingleTweet);
}
function showSingleTweet(aTweet) {
  console.log(aTweet);
  let clone = template.cloneNode(true);
  clone.querySelector(".username").textContent = aTweet.user.name;
  clone.querySelector(".text").innerHTML = aTweet.text;
  tweets.appendChild(clone);
}

fetchData();
