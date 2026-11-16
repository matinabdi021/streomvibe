




async function getserchbox() {
  

  try{
const api_kay="25a7c3ed1bd6d95cf74e12c640316b27";
const urlapi=`https://api.themoviedb.org/3/discover/movie?api_key${api_kay}`;
const option={
  method:'GET',
  headers:{
  accept: "application/json",
  Authorization:
 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE3YzNlZDFiZDZkOTVjZjc0ZTEyYzY0MDMxNmIyNyIsIm5iZiI6MTc5MjA2MjQxMC40ODYsInN1YiI6IjZhZDBiM2NhODNmNjc1YWI1YzcxOTQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lS_D5DCKNbhu-Pz720zc9HvL8Ccy-nCWuMABErM0meA",
  }
}
const respons=await fetch(urlapi,option);
const data=await respons.json();
const parentids=document.getElementById('inputSerchUser');
parentids.addEventListener('click',(e)=>{

let btnserch=e.target.closest('.btnserch');
let imgicons=document.querySelector('img');
let inputSerch=document.querySelector('#inputSerchUser');
let continerSerch=document.querySelector('.boxserchitems');

/* input serch */
inputSerch.addEventListener('input',(e)=>{
  let serchinptvalue=inputSerch.value.toLowerCase();
  if(serchinptvalue.length==0){
    continerSerch.textContent='Please enter the name of the movie ';
  }
   let filterInput=data.results.filter((item)=>{
   return item.title.toLowerCase().includes(serchinptvalue);
  })
  if(serchinptvalue.length==0){
    continerSerch.textContent='Please enter the name of the movie ';
    return
  }
 continerSerch.innerHTML='';
 let ul = document.createElement('ul');
 filterInput.forEach(name => {
      let li =document.createElement('li');
      let img=document.createElement('img');
      let div=document.createElement('div');
      li.textContent=name.title;
       li.setAttribute("data-id",name.id);
      div.appendChild(img);
      li.appendChild(div);
      ul.appendChild(li);
      continerSerch.appendChild(ul);
      img.src=`https://image.tmdb.org/t/p/w300${name.poster_path}`;
      li.addEventListener('click',()=>{
       let idmovis=li.getAttribute("data-id");
        window.location.href=`movie-details.html?id=${idmovis}` 
      })
      ul.classList.add('ulStyleSet')
      li.classList.add('listyleSet');
      img.classList.add('imgbox')
  });
  })
if(btnserch){
continerSerch.classList.toggle('d-blockcss');

}else if(inputSerch){
  continerSerch.classList.toggle('d-blockcss')
}
})
}
  catch{

  }
  
} 
getserchbox();

function handelformLogin(){
const inptuserlogin=document.querySelector('.inputEmaile');
if(!inptuserlogin){
  return;
}

  const inptusererroe=document.getElementById('masseageerroremail');
  inptuserlogin.addEventListener('blur',(e)=>{
  if(inptuserlogin.value.length < 8){
   inptusererroe.textContent='username is less than characters...!';
   inptusererroe.style.color='red';
   inptusererroe.style.fontSize='15px'
  }else if (inptuserlogin.value.length>=8) {
   inptusererroe.textContent='Acceptable';
   inptusererroe.style.color='green';
   inptusererroe.style.fontSize='15px';
    
  }else{
    inptusererroe.textContent='';
  }

  })
  const inpoutpass=document.getElementById('inpotPassword');
  const inputpassErorr=document.getElementById('masseageerrorpas');
  inpoutpass.addEventListener('blur',(e)=>{
  if(inpoutpass.value.length <8){
inputpassErorr.textContent='password is less than characters...!';
   inputpassErorr.style.color='red';
   inputpassErorr.style.fontSize='15px'
  }else if (inpoutpass.value.length>=8) {
    inputpassErorr.textContent='Acceptable';
  inputpassErorr.style.color='green';
   inputpassErorr.style.fontSize='15px';
    
  }else{
    inptusererroe.textContent='';
  }

  })
}

handelformLogin();