const pages=[...document.querySelectorAll('.page')], tabs=[...document.querySelectorAll('[data-tab]')];
function go(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));tabs.forEach(t=>t.classList.toggle('selected',t.dataset.tab===id));}
tabs.forEach(t=>t.addEventListener('click',()=>go(t.dataset.tab)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
let visible=true;
document.getElementById('toggleBalance').onclick=()=>{visible=!visible;document.getElementById('balance').innerHTML=visible?'۱۲۵,۸۰۰,۰۰۰ <small>ریال</small>':'•••••••• <small>ریال</small>';};
let data=[['↙','خرید فروشگاهی','امروز، ۱۲:۴۵','− ۲,۴۵۰,۰۰۰','out'],['↗','واریز به حساب','دیروز، ۱۸:۲۰','+ ۸,۰۰۰,۰۰۰','in'],['⇄','انتقال وجه','۱۴ آبان، ۱۰:۱۲','− ۱,۲۰۰,۰۰۰','out']];
function render(){document.getElementById('transactions').innerHTML=data.map(x=>`<div class="tx"><div class="tx-icon">${x[0]}</div><div class="tx-info"><b>${x[1]}</b><small>${x[2]}</small></div><div class="tx-amount ${x[4]}">${x[3]}</div></div>`).join('');}render();
document.getElementById('continue').onclick=()=>{let card=document.getElementById('dest').value.trim(), amount=document.getElementById('amount').value.trim(), name=document.getElementById('receiver').value.trim();let msg=document.getElementById('transferMsg');if(card.replace(/\D/g,'').length!==16||!amount||!name){msg.textContent='شماره کارت ۱۶ رقمی، نام و مبلغ را کامل وارد کن.';return;}msg.textContent='انتقال نمایشی با موفقیت ثبت شد؛ هیچ وجهی جابه‌جا نشد.';data.unshift(['⇄','انتقال آزمایشی به '+name,'همین الان','− '+amount+' ریال','out']);render();};
document.getElementById('addMoney').onclick=()=>alert('این قابلیت در نسخه تمرینی فقط نمایشی است.');
document.getElementById('bell').onclick=()=>alert('اعلان جدیدی وجود ندارد.');
document.getElementById('allTransactions').onclick=e=>{e.preventDefault();alert('این‌ها تمام تراکنش‌های نمونه هستند.');};
document.getElementById('copyCard').onclick=()=>{navigator.clipboard?.writeText('6219000000004281');alert('شماره کارت نمونه کپی شد.');};
