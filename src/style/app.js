

////////////////////////همبرگر منو در موبایل//////////////////
const burger = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

if (burger && menu && closeMenu) {
  burger.addEventListener('click', () => {
    menu.classList.remove('hidden');
    menu.style.opacity = '1';
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
}

////////////////////اسکرول هدر و بلاب ها //////////////////////
let lastScrollTop = 0;
const header = document.getElementById('mainHeader');
const blob = document.getElementById("blob");

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollY > lastScrollTop && scrollY > 100) {
    header.style.transform = 'translateY(-190px)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  //////////////// پارالاکس آرام بلاب/////////////////////////////////
  if (blob) {
    const parallaxOffset = scrollY * 0.2;
    blob.style.transform = `translateY(${-parallaxOffset}px)`;
  }

  lastScrollTop = scrollY <= 0 ? 0 : scrollY;
});


////////////ایکون برگشت به ابتدای صفحه/////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const section1 = document.querySelector(".sec1");

  window.addEventListener("scroll", () => {
    if (!section1 || !backToTop) return; ///// اگر سکشن یا دکمه نبود، هیچی //////

    const section1Bottom = section1.offsetTop + section1.offsetHeight;

    ///////فقط وقتی از سکشن 1 رد شد، دکمه ظاهر بشه////////
    if (window.scrollY > section1Bottom - 50) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  /////////////کلیک ایکون برای برگشت به بالا///////
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

////////////////حرکت و ورود متن در سکشن های مختلف با اسکرول////////////////////
window.addEventListener("scroll", function () {
  const texts = document.querySelectorAll(".text");
  const windowHeight = window.innerHeight;

  texts.forEach(text => {
    const textTop = text.getBoundingClientRect().top;

    if (textTop < windowHeight - 100) {
      text.classList.add("show-text");
    }
  });
});

////////////////حرکت ابرها در سکشن های مختلف///////////////////
const paraImg = document.querySelectorAll('.image');

function parallax() {
  const scrollTop = window.scrollY;

  paraImg.forEach((img) => {
    const speed = parseFloat(img.dataset.speed) || 0.3;
   
    const offset = (scrollTop * speed) / 4; 

    img.style.transform = `translate3d(0, ${offset}px, 0)`;
  });

  requestAnimationFrame(parallax);
}

requestAnimationFrame(parallax);


//////////////////////////popup animal//////////////////////////////////////

const animalBtn = document.getElementById("animalBtn");
const loginFormContainer = document.getElementById("loginFormContainer");
const closeLogin = document.getElementById("closeLogin");
///////////////مخفی شدن عکس حیوان کنار صفحه///////////
animalBtn.addEventListener("mouseenter", () => {
  loginFormContainer.classList.add("active");
  animalBtn.style.opacity = "0";
});

//////////بستن فرم با ضربدر//////////////////////
closeLogin.addEventListener("click", () => {
  loginFormContainer.classList.remove("active");
  setTimeout(() => {
    animalBtn.style.opacity = "1";
  }, 700);
});


