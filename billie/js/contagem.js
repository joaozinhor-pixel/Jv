// ===== EDITE AQUI =====
const TITULO='Faltam para o Ano Novo 🎆';  // texto de cima (troque pelo nome do show ou do álbum)
const DATA='2027-01-01T00:00:00';  // data e hora (ano-mês-diaThora:min:seg)
// ======================
const CORES=['#f6b3d6','#a7b0aa','#f08a94','#8fcdf0','#9a9de0','#d9d2c5'];
const titulo=document.getElementById('titulo'),relogio=document.getElementById('relogio');
titulo.textContent=TITULO;
let c=0;
setInterval(()=>{c=(c+1)%CORES.length;document.body.style.background=CORES[c];},5000);
function pad(n){return String(n).padStart(2,'0');}
function tick(){
  const s=Math.floor((new Date(DATA)-new Date())/1000);
  if(isNaN(s))return relogio.textContent='Data inválida';
  if(s<=0){titulo.textContent='';return relogio.innerHTML='<h1>Chegou o dia! 🎉🎶</h1>';}
  const v=[['dias',Math.floor(s/86400)],['horas',Math.floor(s%86400/3600)],['min',Math.floor(s%3600/60)],['seg',s%60]];
  relogio.innerHTML=v.map(([n,x])=>'<div class="bloco"><b>'+pad(x)+'</b>'+n+'</div>').join('');
}
tick();setInterval(tick,1000);
