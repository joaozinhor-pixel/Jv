// ===== EDITE AQUI =====
const VIDEO='billie.mp4';     // ex.: 'video.mp4' (arquivo na mesma pasta). Deixe '' para não mostrar.
const PLAYLIST='https://open.spotify.com/playlist/3hxEYLC2I5PxbzPyzkGbeH?si=fc580a85b62a4fc5';  // link da playlist (Spotify, YouTube...). Deixe '' para não mostrar.
// ======================
const sim=document.getElementById('sim'),nao=document.getElementById('nao'),tela=document.getElementById('tela');
function fugir(e){
  if(e&&e.preventDefault)e.preventDefault();
  nao.classList.add('solto');
  const m=10,w=nao.offsetWidth,h=nao.offsetHeight;
  nao.style.left=(m+Math.random()*(innerWidth-w-2*m))+'px';
  nao.style.top=(m+Math.random()*(innerHeight-h-2*m))+'px';
}
nao.addEventListener('mouseenter',fugir);
nao.addEventListener('touchstart',fugir,{passive:false});
nao.addEventListener('click',fugir);
sim.addEventListener('click',()=>{
  let h='<div class="enfeite">✨</div><h1>Eba! Vai ser incrível! 🎶</h1>';
  if(VIDEO)h+='<video src="'+VIDEO+'" controls autoplay playsinline></video>';
  if(PLAYLIST)h+='<div><a class="btn" href="'+PLAYLIST+'" target="_blank" rel="noopener">Abrir a playlist 🎶</a></div>';
  tela.innerHTML=h;nao.remove();
});
for(let i=0;i<22;i++){
  const f=document.createElement('div');
  f.className='brilho';f.textContent=i%2?'💚':'🕷️';
  f.style.left=Math.random()*100+'vw';
  f.style.fontSize=(10+Math.random()*16)+'px';
  f.style.animationDuration=(7+Math.random()*8)+'s';
  f.style.animationDelay=(-Math.random()*12)+'s';
  document.body.appendChild(f);
}
