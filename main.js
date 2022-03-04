// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  const emptyHearts = document.getElementsByClassName("like-glyph")
  for (const heart of emptyHearts) {
    heart.addEventListener("click", emptyHeartClick);
  }

  const err = document.querySelector('#modal');

  function emptyHeartClick(e) {
    const heart = e.target;
    mimicServerCall()
    .then(()=> {
      console.log("success")
      heart.innerText = FULL_HEART;
      heart.setAttribute("class","activated-heart");
      heart.addEventListener("click", fullHeartClick)
    })
    .catch((resp) => {
      console.log("failure")
      err.setAttribute("class","")
      setTimeout(() => err.setAttribute("class","hidden"),3000)
    })
  }

  function fullHeartClick(e) {
    const heart = e.target;
    mimicServerCall()
    .then(()=> {
      console.log("success")
      heart.innerText = EMPTY_HEART;
      heart.setAttribute("class","like-glyph");
      heart.addEventListener("click", emptyHeartClick)
    })
    .catch((resp) => {
      console.log("failure")
      err.setAttribute("class","")
      setTimeout(() => err.setAttribute("class","hidden"),3000)
    })
  }
  

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
