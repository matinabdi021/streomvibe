

async function getdaalis() {
    try{
        const params = new URLSearchParams(window.location.search);
        const moviesIddatalis=params.get('id'); 
        const url=`https://api.themoviedb.org/3/movie/${moviesIddatalis}`;
        const option={
            method: 'GET',
            headers:{
            accept: "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE3YzNlZDFiZDZkOTVjZjc0ZTEyYzY0MDMxNmIyNyIsIm5iZiI6MTc5MjA2MjQxMC40ODYsInN1YiI6IjZhZDBiM2NhODNmNjc1YWI1YzcxOTQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lS_D5DCKNbhu-Pz720zc9HvL8Ccy-nCWuMABErM0meA"
            }
        }
        const respons=await fetch(url,option);
        const datalist=await respons.json();
     
        const backdrop = `https://image.tmdb.org/t/p/original${datalist.backdrop_path}`;
       document.getElementById('backdrop').src = backdrop;
        const poster=document.getElementById('poster');
        poster.src= `https://image.tmdb.org/t/p/w500${datalist.poster_path}`;
        const taitle=document.getElementById('title');
         taitle.textContent=datalist.title;
        const rating=document.getElementById('rating');
        rating.textContent=datalist.vote_average;
        const Releasedatw=document.getElementById('release-date');
        Releasedatw.textContent=datalist.release_date; 
        const status=document.getElementById('status');
        status.textContent=datalist.status;
        const languoage=document.getElementById('language');
        languoage.textContent=datalist.origin_country;
        const ganers=document.getElementById('genres');
        let html =datalist.genres.map((genre) => {
        return  genre.name;});
        ganers.textContent = html;
        const prodComp=document.getElementById('imglog');
        prodComp.src=`https://image.tmdb.org/t/p/w500${datalist.production_companies[0].logo_path}`
        const prodComp2=document.getElementById('imglog2');
        prodComp2.src=`https://image.tmdb.org/t/p/w500${datalist.production_companies[1].logo_path}`
        const namecom=document.getElementById('namecompany');
        namecom.textContent=datalist.production_companies[0].name;
        const contry=document.getElementById('contry');
        contry.textContent=datalist.production_companies[0].origin_country;
        const namecom2=document.getElementById('namecompany2');
        namecom2.textContent=datalist.production_companies[1].name;
        const contry2=document.getElementById('contry2=');
        contry2.textContent=datalist.production_companies[1].origin_country;
        
       
    }
    catch{
        
    }
    
}

getdaalis();