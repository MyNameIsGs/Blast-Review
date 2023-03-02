const fila = document.querySelector(".principalContainer");
const videogames = document.querySelectorAll(".videoGame");

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

/*Event listener Arrows */

rightArrow.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const activeIndicator = document.querySelector('.gameIndicators .active');
  if (activeIndicator.nextSibling){
        activeIndicator.nextSibling.classList.add('active');
        activeIndicator.classList.remove('active');
  }
});

leftArrow.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const activeIndicator = document.querySelector('.gameIndicators .active');
  if (activeIndicator.previousSibling){
        activeIndicator.previousSibling.classList.add('active');
        activeIndicator.classList.remove('active');
  }
});
/*Paginacion*/

const numberPages = Math.ceil(videogames.length / 5);
for(let i = 0; i< numberPages; i++){
    const indicator = document.createElement('button');

if(i === 0){
   indicator.classList.add('active');
}

    document.querySelector('.gameIndicators').appendChild(indicator);
    indicator.addEventListener('click', (e)=>{
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicators .active').classList.remove('active');
        e.target.classList.add('active')
    })

}


/*Hover*/
videogames.forEach((videoGame)=>{
    videoGame.addEventListener('mouseenter',(e)=>{
      const element = e.currentTarget;
      setTimeout(()=>{
        videogames.forEach(videoGame => videoGame.classList.remove('hover'));
        element.ClassList.add('hover');
      }, 200);
    })
});

fila.addEventListener('mouseLeave',()=>{
  videogames.forEach(videoGame => videoGame.classList.remove('hover'));
})