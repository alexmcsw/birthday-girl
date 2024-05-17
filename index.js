function GetValue()
{
    var myarray= new Array("hi","bye","hello");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}


const confettiAmount = 100;
let btnClick = document.querySelector('button');
let btnHover = document.querySelector('.hoverme');

btnClick.onclick = () => throwConfetti(btnClick);
btnHover.onmousemove = () => throwConfetti(btnHover);

function throwConfetti(btn) {
  
  let df = document.createDocumentFragment();
  for (let i=0; i<confettiAmount; i++) {
    let c = document.createElement("i");
    c.style.cssText = `
      transform: translate3d(${(random(500) - 250)}px, ${(random(225) - 150)}px, 0)
      rotate(${ random(360) }deg); 
      background: hsla(${random(360)},100%,50%,1);
    `;
    df.appendChild(c);
    setTimeout(()=> {
      c.remove();
    }, 2000)  
  } 
  btn.appendChild(df);

}

function random(max){
  return Math.random() * (max - 0) + 0;
}