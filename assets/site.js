const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu(){menu?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
const tabs=[...document.querySelectorAll('[role="tab"]')];
function activateTab(tab,focus=false){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});if(focus)tab.focus();}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;else if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=tabs.length-1;else return;e.preventDefault();activateTab(tabs[n],true);});});
const form=document.querySelector('#demo-form');
const result=document.querySelector('#form-result');
function inquiry(){const d=new FormData(form);return `产品演示咨询｜${d.get('company')}\n\n姓名：${d.get('name')}\n单位：${d.get('company')}\n邮箱：${d.get('email')}\n关注产品：${d.get('product')}\n\n希望交流的场景：\n${d.get('message')||'希望进一步了解产品及部署方式。'}`;}
if(form){const product=new URLSearchParams(location.search).get('product');if(product&&[...form.elements.product.options].some(o=>o.value===product))form.elements.product.value=product;
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const body=inquiry();const company=form.elements.company.value;window.location.href=`mailto:contact@bladesec.ai?subject=${encodeURIComponent('智锋安全产品演示咨询｜'+company)}&body=${encodeURIComponent(body)}`;result.textContent='已请求打开邮件应用。请在邮件应用中确认并发送；若未打开，可复制咨询内容发送至 contact@bladesec.ai。';});
document.querySelector('#copy-inquiry').addEventListener('click',async()=>{if(!form.reportValidity())return;try{await navigator.clipboard.writeText(inquiry());result.textContent='咨询内容已复制。请粘贴到邮件并发送至 contact@bladesec.ai。';}catch{result.textContent='浏览器未允许复制。请直接通过上方邮箱联系，或使用“生成咨询邮件”。';}});}
