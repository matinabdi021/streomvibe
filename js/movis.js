const api_kay = "25a7c3ed1bd6d95cf74e12c640316b27";
async function getmovies() {
  try {
  
   /*  window.addEventListener("load", () => {
      const lod =document.querySelector(".loader");
      lod.classList.add="heaedn";
    }); */
    //API
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_kay}`;
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE3YzNlZDFiZDZkOTVjZjc0ZTEyYzY0MDMxNmIyNyIsIm5iZiI6MTc5MjA2MjQxMC40ODYsInN1YiI6IjZhZDBiM2NhODNmNjc1YWI1YzcxOTQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lS_D5DCKNbhu-Pz720zc9HvL8Ccy-nCWuMABErM0meA",
      },
    };
    const respons = await fetch(url, option);
    if (!respons.ok) {
      throw new Error(`HTTP Error: ${respons.status}`);
    }
    const data = await respons.json();

    const boxmovies = document.querySelectorAll(".imgbackground");
    const titlemovies = document.querySelectorAll(".titlemovie");
    const allCards = document.querySelectorAll(".visbil");
    //gener
    const selectisUser = document.querySelector("#selectganer");
    if (Number(selectisUser.value) === 11111) {
      allCards.forEach((card) => {
        card.style.visibility = "visible";
      });
    }
    /* btn cgange geners */
    selectisUser.addEventListener("change", (e) => {
      let userPerceivedGener = Number(e.target.value);
      let filteredMovies;
      if (userPerceivedGener === 11111) {
        filteredMovies = data.results;
      } else {
        filteredMovies = data.results.filter((generIdAPI) => {
          return generIdAPI.genre_ids.includes(userPerceivedGener);
        });
      }
      boxmovies.forEach((box) => {
        box.innerHTML = "";
      });

      titlemovies.forEach((title) => {
        title.textContent = "";
      });
      allCards.forEach((card) => {
        card.style.visibility = "hidden";
      });

      for (let i = 0; i < filteredMovies.length && i < allCards.length; i++) {
        const res = filteredMovies[i];

        if (res && res.poster_path) {
          allCards[i].style.visibility = "visible";

          const imgtag = document.createElement("img");

          imgtag.src = `https://image.tmdb.org/t/p/w500${res.poster_path}`;

          imgtag.classList.add("imgvaled");

          boxmovies[i].appendChild(imgtag);
        }
      }
      for (
        let i = 0;
        i < filteredMovies.length && i < titlemovies.length;
        i++
      ) {
        const restitle = filteredMovies[i];

        if (restitle && restitle.title) {
          titlemovies[i].textContent = restitle.title;
        }
      }
    });

    /* poster movise*/

    for (let i = 0; i < boxmovies.length; i++) {
      const res = data.results[i];
      if (res && res.poster_path) {
        const imgtag = document.createElement("img");
        imgtag.src = `https://image.tmdb.org/t/p/w500${res.poster_path}`;
        imgtag.classList.add("imgvaled");
        boxmovies[i].appendChild(imgtag);
      }
    }
    /* title pstermovies */

    for (let i = 0; i < titlemovies.length; i++) {
      const restitle = data.results[i];
      if (restitle && restitle.title) {
        titlemovies[i].textContent = restitle.title;
      }
    }
    /* ganer2 */
    const parent = document.querySelector("#mainforParent");
    console.log(parent);
    parent.addEventListener("click", (e) => {
      const btnforidset = document.querySelectorAll(".btn-secondary");
      const movisID = data.results.map((movie) => {
        return movie.id;
      });
      for (let i = 0; i < btnforidset.length; i++) {
        const btnid = movisID[i];
        if (btnid && movisID)
          btnforidset[i].setAttribute("data-id", movisID[i]);
      }
      const btndataleis = e.target.dataset.id;
      if (btndataleis) {
        window.location.href = `movie-details.html?id=${btndataleis}`;
      }
    });
  } catch (error) {
    console.log("حطا در دریافت اطلاعات", error.message);
  }
}
getmovies();
