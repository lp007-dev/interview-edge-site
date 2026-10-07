(() => {
 const steps = [['index.html','Free sheet'],['downloads.html','Downloads'],['offer.html','Interview Edge'],['checkout.html','Payhip checkout'],['welcome.html','Welcome']];
 const file = location.pathname.split('/').pop() || 'index.html';
 const i = Math.max(0, steps.findIndex(s => s[0] === file));
 const nav = document.createElement('nav');
 nav.className = 'preview-nav'; nav.setAttribute('aria-label','Preview sequence');
 nav.innerHTML = `<a href="${steps[Math.max(0,i-1)][0]}" aria-label="Previous page">‹ Back</a><span>Preview ${i+1} / 5 · ${steps[i][1]}<small>Swipe left or right to see the sequence</small></span><a href="${steps[Math.min(4,i+1)][0]}" aria-label="Next page">Next ›</a>`;
 if(i===0)nav.firstElementChild.style.visibility='hidden';
 if(i===4)nav.lastElementChild.style.visibility='hidden';
 document.body.appendChild(nav);
 let x=0,y=0,target=null;
 document.addEventListener('touchstart', e => {x=e.changedTouches[0].clientX;y=e.changedTouches[0].clientY;target=e.target;}, {passive:true});
 document.addEventListener('touchend', e => {
  if(target.closest('input,textarea,button,a,select'))return;
  const dx=e.changedTouches[0].clientX-x,dy=e.changedTouches[0].clientY-y;
  if(Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*1.5){const n=i+(dx<0?1:-1);if(n>=0&&n<5)location.href=steps[n][0];}
 }, {passive:true});
})();
