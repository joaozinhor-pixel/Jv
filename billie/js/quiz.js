const R={
  wwa:{e:'🕷️',n:"When We All Fall Asleep, Where Do We Go?",cor:'#1c1c1c',t:"Criativa e ousada: você gosta de quebrar regras e surpreender."},
  hte:{e:'🌅',n:"Happier Than Ever",cor:'#f1dcc4',t:"Sincera e intensa: você sente tudo e não esconde nada."},
  hmh:{e:'💙',n:"Hit Me Hard and Soft",cor:'#8fb7e0',t:"Calma e profunda: você encontra equilíbrio entre força e delicadeza."}
};
const Q=[
  ["Qual é o seu clima?",[["Criativa e ousada",'wwa'],["Sincera e intensa",'hte'],["Calma e profunda",'hmh']]],
  ["Qual seria o seu programa ideal?",[["Criar músicas de madrugada",'wwa'],["Passear sozinha ao entardecer",'hte'],["Nadar e ficar perto do mar",'hmh']]],
  ["Qual cor você prefere?",[["Preto e verde-neon",'wwa'],["Bege e dourado",'hte'],["Azul",'hmh']]],
  ["Qual palavra define você?",[["Autenticidade",'wwa'],["Intensidade",'hte'],["Equilíbrio",'hmh']]],
  ["Qual roupa você escolhe?",[["Roupa larga e preta",'wwa'],["Vestido simples",'hte'],["Moletom e tênis",'hmh']]]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const caixa=document.getElementById('caixa'),prog=document.getElementById('prog');
let i=0,pts={};
function mostrar(){
  if(i>=Q.length)return fim();
  prog.textContent='Pergunta '+(i+1)+' de '+Q.length;
  caixa.innerHTML='<h2>'+Q[i][0]+'</h2>';
  Q[i][1].forEach(([t,k])=>{
    const b=document.createElement('button');
    b.className='opcao';b.textContent=t;
    b.onclick=()=>{pts[k]=(pts[k]||0)+1;i++;mostrar();};
    caixa.appendChild(b);
  });
}
function fim(){
  const k=Object.keys(pts).sort((a,b)=>pts[b]-pts[a])[0],r=R[k];
  prog.textContent='';
  caixa.innerHTML='<div class="resultado" style="background:'+r.cor+';color:'+txt(r.cor)+'"><div class="grande">'+r.e+'</div><h2>'+r.n+'</h2><p>'+r.t+'</p></div><p><button class="btn" id="refazer">Refazer o quiz</button></p>';
  document.getElementById('refazer').onclick=()=>{i=0;pts={};mostrar();};
}
mostrar();
