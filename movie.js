const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
let main=document.getElementById('main');
let form=document.getElementById('form');
let search=document.getElementById('search');
getMovies(API_URL);
function getMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
    //    console.log(data)
       showMovie(data.results);
      
    })
}

function showMovie(data){
    main.innerHTML="";
    for(let i=0;i<data.length;i++){
        let{title,poster_path,vote_average,overview}=data[i];
        // console.log(title);
        let moviel=document.createElement('div');
        moviel.classList.add('movie');
        console.log(moviel)
        moviel.innerHTML=` 
        <img src="${IMG_URL+poster_path}"/>
        <div class="movie_info">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
            </div>`
            main.appendChild(moviel);
            
    };
}

function getcolor(vote){
if(vote>=8){
    return "green";
}else if(vote>=5){
    return "orange"
}else{
    return "red";
}
}

form.addEventListener('submit',(e)=>{
e.preventDefault();
 let searchTerm=search.value;
 if(searchTerm){
// getMovies(searchURL+'$query='+searchTerm);
getMovies(searchURL+'&query='+searchTerm)
 }else{
    getMovies(API_URL);
 }
})