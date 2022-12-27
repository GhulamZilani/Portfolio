let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
                
var mybtn = document.querySelectorAll("#btn-global");

for(let i =0; i<mybtn.length; i++)
{
  mybtn[i].addEventListener('mouseover', ()=>{
    mybtn[i].parentNode.classList.remove('hover');
  })
  // console.log(ele);
  mybtn[i].addEventListener('mouseout', ()=>{
    mybtn[i].parentNode.classList.add('hover');
  })
}
