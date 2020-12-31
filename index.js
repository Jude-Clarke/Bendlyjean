let up;
const links = document.querySelectorAll("a");

window.onscroll = function(e) {
  if(this.oldScroll > this.scrollY){
    up = true;
    } else {
    up = false;
  }
  this.oldScroll = this.scrollY;
}
function next() {
  if(up === true){
    // Scroll to Title
    if((0 < window.scrollY) && (window.scrollY < 695)){
      window.scrollTo(0, 0);
    }
    // Scroll to About
    if((695 < window.scrollY) && (window.scrollY < 1387)){
      window.scrollTo(0, 695);
    }
    // Scroll to Book a Services
    if((1387 < window.scrollY) && (window.scrollY < 2082)){
      window.scrollTo(0, 1387);
    }
  } else {
    // Scroll to About
    if((0 < window.scrollY) && (window.scrollY < 695)){
      window.scrollTo(0, 695);
    }
    // Scroll to Services
    if((695 < window.scrollY) && (window.scrollY < 1387)){
      window.scrollTo(0, 1387);
    }
    // Scroll to Book a Call
    if((1387 < window.scrollY) && (window.scrollY < 2082)){
      window.scrollTo(0, 2082);
    }
  }
}

window.addEventListener('scroll', next);

for(var i = 0; i < links.length; i++){
  links[i].addEventListener("click", ()=>{
    window.removeEventListener('scroll', next);
    setTimeout(()=>{
      window.addEventListener('scroll', next);
    }, 1000);
  });
}
