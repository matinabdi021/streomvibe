const hedaer = document.getElementById("headerParent");

const menuBtn = document.querySelector("#menuBtn");
const menuBox = document.querySelector("#menuBox");
const menuIcon = menuBtn.querySelector("i");

headerParent.addEventListener("click", (e) => {
  let btnMenu = e.target.closest("#menuBtn");
  if (btnMenu) {
    menuBox.classList.toggle("closeMenu");
    let icon = btnMenu.querySelector("img");
    icon.src.includes("/assets/icon/arowdraops.png.png")
      ? (icon.src = "/assets/icon/close.png.png")
      : (icon.src = "/assets/icon/arowdraops.png.png");
  }
});

//hedaer btn

const tagparent = document.getElementById("headerParent");
const boxsrach = document.getElementById("contInputSearch");

tagparent.addEventListener("click", (e) => {
  let btnserch = e.target.closest("#btnserch");
  let imgicon = e.target.closest("#iconserch");
  /* دکمه سرچ فیلم */
  if (btnserch) {
    boxsrach.classList.toggle("width");
    imgicon.src = imgicon.src.includes(
      "search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png",
    )
      ? "./assets/icon/close.png.png"
      : "./assets/icon/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
      if(!document.querySelector('.search-input')){
    const inputjs = document.createElement("input");
    const video=document.createElement('video');
    const source=document.createElement('source');
    inputjs.setAttribute("placeholder", "Search movies ");
    inputjs.setAttribute("type", "text");
    
    boxsrach.appendChild(inputjs);
    inputjs.classList.toggle("search-input");
    video.classList.toggle('search-video');
   }
    
  
}
  
});
