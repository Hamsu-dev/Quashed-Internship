const toggleBtn = document.querySelector(".header__dark-mode-toggler__btn");
const body = document.querySelector("body");
const root = document.querySelector(":root");
const style =   getComputedStyle(root);

toggleBtn.addEventListener("click",function(){
   
    this.classList.toggle("translate");
    if(this.classList.contains("translate")){
        root.style.setProperty("--background-color","hsl(230, 17%, 14%)")
        root.style.setProperty("--overViewCard-color","hsl(228, 28%, 20%)")
        root.style.setProperty("--number-font-color","hsl(0, 0%, 100%)")
        root.style.setProperty("--text-font-color","hsl(228, 34%, 66%)")
        root.style.setProperty("--toggle-theme","linear-gradient(90deg,hsl(210, 78%, 56%),hsl(146, 68%, 55%))");
        root.style.setProperty("--toggle-btn","hsl(230, 17%, 14%)");
        root.style.setProperty("--hover","hsla(228, 28%, 50%,0.4)");
    } else {
        root.style.setProperty("--background-color","hsl(0, 0%, 100%)")
        root.style.setProperty("--overViewCard-color","hsl(227, 47%, 96%)")
        root.style.setProperty("--number-font-color","hsl(230, 17%, 14%)")
        root.style.setProperty("--text-font-color","hsl(228, 12%, 44%)")
        root.style.setProperty("--toggle-theme","hsl(230, 22%, 74%)")
        root.style.setProperty("--toggle-btn","hsl(0, 0%, 100%)");
        root.style.setProperty("--hover","rgba(0,0,0,0.1)");
    }
})

function changeMode(){
   
}

// bgEl = document.querySelector("body");
// bgEl.addEventListener("mousemove", (e)=>{
//     const target = e.target;
//     const rect = target.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width/2;
//     const y = e.clientY - rect.top - rect.height/2;
//     bgEl.style.setProperty('--offset-x', x + "px");
//     bgEl.style.setProperty('--offset-y', y + "px");
// })
