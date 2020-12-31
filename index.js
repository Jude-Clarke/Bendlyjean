let up;
const links = document.querySelectorAll("a");
const sectionSelect = document.querySelector("#section-select");
const selections = document.querySelectorAll(".selection");

// window.onscroll = function(e) {
//   if(this.oldScroll > this.scrollY){
//     up = true;
//     } else {
//     up = false;
//   }
//   this.oldScroll = this.scrollY;
// }
// function next() {
//   if(up === true){
//     // Scroll to Title
//     if((0 < window.scrollY) && (window.scrollY < 695)){
//       window.scrollTo(0, 0);
//     }
//     // Scroll to About
//     if((695 < window.scrollY) && (window.scrollY < 1387)){
//       window.scrollTo(0, 695);
//     }
//     // Scroll to Book a Services
//     if((1387 < window.scrollY) && (window.scrollY < 2082)){
//       window.scrollTo(0, 1387);
//     }
//   } else {
//     // Scroll to About
//     if((0 < window.scrollY) && (window.scrollY < 695)){
//       window.scrollTo(0, 695);
//     }
//     // Scroll to Services
//     if((695 < window.scrollY) && (window.scrollY < 1387)){
//       window.scrollTo(0, 1387);
//     }
//     // Scroll to Book a Call
//     if((1387 < window.scrollY) && (window.scrollY < 2082)){
//       window.scrollTo(0, 2082);
//     }
//   }
// }

// window.addEventListener('scroll', next);
//
// for(var i = 0; i < links.length; i++){
//   links[i].addEventListener("click", ()=>{
//     window.removeEventListener('scroll', next);
//     setTimeout(()=>{
//       window.addEventListener('scroll', next);
//     }, 1000);
//   });
// }
//
// for(var i = 0; i < selections.length; i++){
//   selections[i].addEventListener("click", (e)=>{
//     for(var i = 0; i < selections.length; i++){
//       selections[i].classList.remove("active");
//       e.target.classList.add("active");
//     };
//   });
// }


window.addEventListener('scroll', activate);

function activate() {
  console.log(window.scrollY);
  if(window.scrollY < 400){
    sectionSelect.style.display = "none";
  } else {
    sectionSelect.style.display = "flex";    
  }
  // About Section
  if((window.scrollY > 400) && (window.scrollY < 1110)){
    for(var i = 0; i < selections.length; i++){
      selections[i].classList.remove("active");
    };
    selections[1].classList.add("active");
  }
  // Services Section
  if((window.scrollY > 1110) && (window.scrollY < 1805)){
    for(var i = 0; i < selections.length; i++){
      selections[i].classList.remove("active");
    };
    selections[2].classList.add("active");
  }
  // Book-a-Call Section
  if(window.scrollY > 1805){
    for(var i = 0; i < selections.length; i++){
      selections[i].classList.remove("active");
    };
    selections[3].classList.add("active");
  }
}
