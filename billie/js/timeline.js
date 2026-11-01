const ALBUNS=[
  [2017,'🌊',"Don't Smile at Me",'#a3d65c',"O primeiro EP dela."],
  [2019,'🕷️',"When We All Fall Asleep, Where Do We Go?",'#1c1c1c',"O álbum de estreia, com \"bad guy\"."],
  [2021,'🌅',"Happier Than Ever",'#f1dcc4',"Saiu em 30 de julho de 2021 e tem 16 músicas."],
  [2024,'💙',"Hit Me Hard and Soft",'#8fb7e0',"Tem \"Birds of a Feather\"."]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const lista=document.getElementById('lista');
ALBUNS.forEach(([ano,e,nome,cor,c])=>{
  const b=document.createElement('button');
  b.className='album';b.setAttribute('aria-expanded','false');
  b.style.setProperty('--c',cor);b.style.setProperty('--t',txt(cor));
  b.innerHTML=e+' <b>'+nome+'</b> ('+ano+')<small>'+c+'</small>';
  b.onclick=()=>b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')==='false');
  lista.appendChild(b);
});
