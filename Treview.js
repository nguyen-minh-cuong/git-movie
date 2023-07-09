
const url = new URL(location.href);
const movieID = url.searchParams.get('movieId');
const commentSection = document.getElementById('commentSection');



// console.log(commentSection)
// console.log(movieId)


function findReview() {
  fetch('https://web-movie--cuongnguyen213.repl.co/api/v1/reviews/movie/'+ `${movieID}`).then((response) => { 
  return response.json()
}).then((data) => {console.log(data);
 for (let i = 0; i < data.length; i++)
{console.log(data[i].user)

const div = document.createElement('div')
const userName  = document.createElement('div')
const userComment = document.createElement('p')

div.setAttribute('id','userFrame')
userName.setAttribute('id','userName')
userComment.setAttribute('id','userComment')
  
userName.innerHTML =  data[i].user;
userComment.innerHTML = data[i].review;
div.appendChild(userName)
div.appendChild(userComment)
commentSection.appendChild(div)
  
}
})
}
 findReview();
 
 // POST
 const myForm = document.getElementById('form');
 const nameInput = document.getElementById('nameInput');
 const review = document.getElementById('reviewInput');
 
console.log(myForm)
 
 
 myForm.addEventListener('submit',(ev) => {
   ev.preventDefault();
   
   const info = {
   movieId: movieID,
   user: nameInput.value,
   review: reviewInput.value
 }
   
   postReview(info);
   setTimeout(() => {
     commentSection.innerHTML = "";
   findReview();
   }, 3000)
   
   console.log(movieID,nameInput.value,reviewInput.value)
   myForm.reset()
 })
 
function postReview(x){ fetch('https://web-movie--cuongnguyen213.repl.co/api/v1/reviews/new',{
  method: "POST",
  headers: {
    'Content-Type': "application/json"
  },
  body: JSON.stringify(x)
})

}