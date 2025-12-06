document.addEventListener('DOMContentLoaded',()=>{
const toggle=document.querySelector('.mode-toggle');
const starsContainer=document.getElementById('stars');
// Crear estrellas una sola vez
for(let i=0;i<60;i++){
const s=document.createElement('div');
s.classList.add('star');
s.style.top=`${Math.random()*100}%`;
s.style.left=`${Math.random()*100}%`;
s.style.animationDuration=`${3+Math.random()*4}s`;
starsContainer.appendChild(s);
}
// Cambiar modo día/noche
toggle.addEventListener('click',()=>{
document.body.classList.toggle('dark');
toggle.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
});
// Modales (inicio de sesión / registro)
const loginBtn=document.getElementById('loginBtn');
const registerBtn=document.getElementById('registerBtn');
const modalLogin=document.getElementById('modal-login');
const modalRegister=document.getElementById('modal-register');
const closes=document.querySelectorAll('.close');
loginBtn.onclick=()=>modalLogin.style.display='flex';
registerBtn.onclick=()=>modalRegister.style.display='flex';
closes.forEach(btn=>btn.onclick=()=>btn.parentElement.parentElement.style.display='none');
window.onclick=e=>{
if(e.target===modalLogin||e.target===modalRegister)e.target.style.display='none';
};
});
