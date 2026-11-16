


async function getposter() {
    try{
        const api_kay='25a7c3ed1bd6d95cf74e12c640316b27';

     const respans=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_kay}`);
     if(api_kay){
        if(!respans){
            throw new Error(" خطا در دریافت");
        }
        const data=await respans.json();

        console.log(data);

        const poster=document.querySelectorAll('.chil-1 img,.chil-2 img');

        for (let i = 0; i < poster.length; i++) {
            const movie =data.results[i];
            if (movie && movie.poster_path) {
                 poster[i].src=`https://image.tmdb.org/t/p/w300${movie.poster_path}`;
            }else if(!movie && movie.poster_path){
                throw new Error(`پوستر شماره${i=1} موجود نیست`);   
            }   
        }
     }
    }
    catch{console.log('خطا در دریافت اطلاعات');
    }
}

getposter();

