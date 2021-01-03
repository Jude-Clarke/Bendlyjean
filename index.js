let up;
const links = document.querySelectorAll("a");
const sectionSelect = document.querySelector("#section-select");
const selections = document.querySelectorAll(".selection");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links .link");
const aboutMeH1 = document.querySelector("#about-me h1");
const servicesH1 = document.querySelector("#services h1");
const bookACallH1 = document.querySelector("#book-a-call h1");
const form = document.querySelector("#contact-form");
const inputs = document.querySelectorAll("input");

const year = new Date().getFullYear()
const copyright = document.querySelector(".date");
copyright.textContent = year;


hamburger.addEventListener("click", ()=> {
  navLinks.classList.toggle("open");
  navigationLinks.forEach(link => {
    link.classList.toggle("fade");
  });
});

for(var i = 0; i < navigationLinks.length; i ++){
  navigationLinks[i].addEventListener("click", ()=> {
    navLinks.classList.toggle("open");
    navigationLinks.forEach(link => {
      link.classList.toggle("fade");
    });
  });
};

if(screen.width < "2000px") {
  sectionSelect.style.display = "none";
}

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
  if(window.scrollY < 300){
    sectionSelect.style.display = "none";
  } else {
    sectionSelect.style.display = "flex";
  }
  // About Section
  if((window.scrollY > 400) && (window.scrollY < 1110)){
    aboutMeH1.style.transform = "translateX(0)";
    aboutMeH1.style.opacity = ".2";
    for(var i = 0; i < selections.length; i++){
      selections[i].classList.remove("active");
    };
    selections[1].classList.add("active");
  }
  // Services Section
  if((window.scrollY > 1110) && (window.scrollY < 1805)){
    servicesH1.style.transform = "translateX(0)";
    servicesH1.style.opacity = ".3";
    for(var i = 0; i < selections.length; i++){
      selections[i].classList.remove("active");
    };
    selections[2].classList.add("active");
  }
  // Book-a-Call Section
  if(window.scrollY > 1805){
    bookACallH1.classList.add("bounce");
    bookACallH1.style.opacity ="1";
    bookACallH1.style.transform ="scale(1)";
    for(var i = 0; i < selections.length; i++){
      selections[i].classList.remove("active");
    };
    selections[3].classList.add("active");
  }
}


// Success message
function success() {
  const senderName = document.querySelector("#sender_name");
  const firstName = senderName.value.split(" ")[0];
  form.style.marginTop = "50px";
  form.innerHTML = "<h3>Thank you for your message, " + firstName + ". Make sure to check your email for my response.</h3>";
}
function failure() {
  const senderName = document.querySelector("#sender_name");
  const firstName = senderName.value.split(" ")[0];
  form.style.marginTop = "50px";
  form.innerHTML = "<h3>Sorry, " + firstName + ". It seems that didn't go through. Send me a message at <a style='color: var(--white); text-decoration: underline;' href='mailto:info@ribbonequity.com'>info@ribbonequity.com</a></h3>";
}

// Emailjs code
(function(){
   emailjs.init("user_jKntaHbJSFaVC4HKcUPnu");
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_18h19vu', 'contact_form', this, 'user_jKntaHbJSFaVC4HKcUPnu')
      .then(function() {
          console.log('SUCCESS!');
          success();
      }, function(error) {
          failure();
          console.log('FAILED...', error);
      });
});
}
