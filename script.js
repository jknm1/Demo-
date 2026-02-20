window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

/* cursor glow */
document.addEventListener("mousemove",e=>{
const glow=document.querySelector(".cursor-glow");
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});

/* modal */
function openFounder(){
document.getElementById("founderModal").classList.add("show");
}
function closeFounder(){
document.getElementById("founderModal").classList.remove("show");
}

/* fade reveal */
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add("visible");
});
});
document.querySelectorAll(".fade-in").forEach(el=>observer.observe(el));

/* counter */
document.querySelectorAll(".count").forEach(counter=>{
const update=()=>{
const target=+counter.dataset.target;
const current=+counter.innerText;
const inc=target/120;

if(current<target){
counter.innerText=Math.ceil(current+inc);
requestAnimationFrame(update);
}else counter.innerText=target+"+";
};
update();
});

/* particles */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let dots=[];
for(let i=0;i<70;i++){
dots.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-.5)*0.5,
dy:(Math.random()-.5)*0.5
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
dots.forEach(d=>{
d.x+=d.dx;
d.y+=d.dy;
ctx.beginPath();
ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
ctx.fillStyle="#6faaff";
ctx.fill();
});
requestAnimationFrame(animate);
}
animate();
