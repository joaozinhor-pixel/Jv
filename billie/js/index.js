const OPCOES=[
  {e:'🎧',t:'Convite para ouvir Billie Eilish',u:'convite.html'},
  {e:'🔮',t:'Qual álbum dela é você?',u:'quiz.html'},
  {e:'📅',t:'Linha do tempo dos álbuns',u:'timeline.html'},
  {e:'⏳',t:'Contagem regressiva',u:'contagem.html'},
  {e:'🃏',t:'Jogo da memória',u:'memoria.html'}
];
const menu=document.getElementById('menu');
OPCOES.forEach((o,i)=>{
  const a=document.createElement('a');
  a.className='op';a.href=o.u;
  a.innerHTML='<i>'+(i+1)+'</i><span>'+o.e+' '+o.t+'</span>';
  menu.appendChild(a);
});
addEventListener('keydown',e=>{const o=OPCOES[+e.key-1];if(o)location.href=o.u;});
