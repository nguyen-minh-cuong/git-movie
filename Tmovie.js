const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWFmZGMzMTU3MWUzMjRjZmRhZDFiODM3OTJjZTUxNyIsInN1YiI6IjY0OGFmM2U2MjYzNDYyMDBjYTE4YTE4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BcmR0tJXA74WrxFxwIrMz08sWDFesEl3rxRYYtTq9FU'
  } } ;
  
let  sampleLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5aafdc31571e324cfdad1b83792ce517&page=1';

let imgRoot = 'https://image.tmdb.org/t/p/w1280';

let generalLink = 'https://api.themoviedb.org/3/search/movie?&api_key=5aafdc31571e324cfdad1b83792ce517&query=';

let userCommand= document.getElementById("bar");
let sendForm = document.getElementById("form");

function findMovie(link,option)  {
  fetch ( link , option)
  .then(response =>  response.json())
  .then(data => { 
    for(i=1; i < data.results.length;i++)
    { const title = data.results[i].title;
      const posterLink = data.results[i].poster_path;
      
      const  newDiv = document
      .createElement('div');
      const  newImg = document
      .createElement('img');
      const  newP = document
      .createElement('p');
      
      newDiv.setAttribute('id','frame');
      newImg.setAttribute('id','img');
      newP.setAttribute('id','name');
      
      newP.innerHTML = title;
      newImg.src = imgRoot + posterLink;
      
      newDiv.appendChild(newImg);
      newDiv.appendChild(newP);
      document.getElementById('poster-frame').appendChild(newDiv);
      
    
    } })
  
  .catch(err => console.error(err)); };
   findMovie(sampleLink, options);
 //  findMovie(generalLink + "dream", options);

  
sendForm.addEventListener("submit",(ev) =>{
  ev.preventDefault();
  document.getElementById("poster-frame").innerHTML= "";
  findMovie(generalLink + userCommand.value, options);
  console.log(userCommand.value);
  sendForm.reset();
  
});
  
   
  
  
  
  