
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-btn');
 const links=document.querySelector('.nav-links');
 if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'))}
 const els=document.querySelectorAll('.reveal');
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
 els.forEach(el=>io.observe(el));
 const phrases=["Better decisions.","Stronger institutions.","Greater resilience."];
 const rot=document.querySelector('[data-rotate]');
 if(rot){let i=0;setInterval(()=>{i=(i+1)%phrases.length;rot.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-8px)'},{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:700});setTimeout(()=>rot.textContent=phrases[i],350)},3200)}
 const y=document.querySelector('[data-year]'); if(y)y.textContent=new Date().getFullYear();
});
