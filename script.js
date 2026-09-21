const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');

if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-expanded',String(!open));
    nav.classList.toggle('open',!open);
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    menuButton.setAttribute('aria-expanded','false');
    nav.classList.remove('open');
  }));
}

const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const stage=document.querySelector('.hero-stage');
const after=document.querySelector('.after-card');
const before=document.querySelector('.before-card');

if(stage&&after&&before&&window.matchMedia('(pointer:fine)').matches){
  stage.addEventListener('mousemove',(event)=>{
    const rect=stage.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    after.style.transform=`rotate(${3+x*2}deg) translate(${x*8}px,${y*8}px)`;
    before.style.transform=`rotate(${-6-x*1.5}deg) translate(${-x*5}px,${-y*5}px)`;
  });
  stage.addEventListener('mouseleave',()=>{
    after.style.transform='rotate(3deg)';
    before.style.transform='rotate(-6deg) translateZ(-20px)';
  });
}
