const EMOJIS=['💚', '🕷️', '🌅', '💙', '🎧', '🖤'];
const grade=document.getElementById('grade'),info=document.getElementById('info');
let abertas,jogadas,pares;
function iniciar(){
  abertas=[];jogadas=0;pares=0;info.textContent='Jogadas: 0';grade.innerHTML='';
  [...EMOJIS,...EMOJIS].sort(()=>Math.random()-.5).forEach(e=>{
    const b=document.createElement('button');
    b.className='carta';b.textContent='?';b.dataset.e=e;
    b.onclick=()=>virar(b);
    grade.appendChild(b);
  });
}
function virar(b){
  if(abertas.length===2||b.classList.contains('aberta')||b.classList.contains('par'))return;
  b.classList.add('aberta');b.textContent=b.dataset.e;abertas.push(b);
  if(abertas.length<2)return;
  jogadas++;info.textContent='Jogadas: '+jogadas;
  const [x,y]=abertas;
  if(x.dataset.e===y.dataset.e){
    x.classList.replace('aberta','par');y.classList.replace('aberta','par');abertas=[];pares++;
    if(pares===EMOJIS.length)info.textContent='Você ganhou em '+jogadas+' jogadas! 🎉';
  }else setTimeout(()=>{
    [x,y].forEach(c=>{c.classList.remove('aberta');c.textContent='?';});abertas=[];
  },800);
}
document.getElementById('reiniciar').onclick=iniciar;
iniciar();
