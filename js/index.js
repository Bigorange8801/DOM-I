const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br>Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = 'img/logo.png'
const navLinks = document.querySelectorAll('header nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1']
navLinks[1].textContent = siteContent['nav']['nav-item-2']
navLinks[2].textContent = siteContent['nav']['nav-item-3']
navLinks[3].textContent = siteContent['nav']['nav-item-4']
navLinks[4].textContent = siteContent['nav']['nav-item-5']
navLinks[5].textContent = siteContent['nav']['nav-item-6']
navLinks.forEach(link => link.style.color ='green')




const ctaInfo = document.querySelectorAll('h1');
ctaInfo[0].textContent = "DOM Is Awesome!";
const ctaButton = document.querySelectorAll('button');
ctaButton[0].textContent = 'Get Started!'
let ctaPic = document.getElementById("cta-img");
ctaPic.src="img/header-img.png"


const topConH4 = document.querySelectorAll('.main-content .top-content .text-content h4');
topConH4[0].textContent = siteContent['main-content']['features-h4']
topConH4[1].textContent = siteContent['main-content']['about-h4']
const topConP = document.querySelectorAll('.main-content .top-content .text-content p');
topConP[0].textContent = siteContent['main-content']['features-content']
topConP[1].textContent = siteContent['main-content']['about-content']
let mainPic = document.getElementById("middle-img");
mainPic.src="img/mid-page-accent.jpg"
const bottomConH4 = document.querySelectorAll('.main-content .bottom-content h4');
bottomConH4[0].textContent = siteContent['main-content']['services-h4']
bottomConH4[1].textContent = siteContent['main-content']['product-h4']
bottomConH4[2].textContent = siteContent['main-content']['vision-h4']
const bottomConP = document.querySelectorAll('.main-content .bottom-content p');
bottomConP[0].textContent = siteContent['main-content']['services-content']
bottomConP[1].textContent = siteContent['main-content']['product-content']
bottomConP[2].textContent = siteContent['main-content']['vision-content']



const conInfoH4 = document.querySelectorAll('.contact h4');
conInfoH4[0].textContent = siteContent['contact']['contact-h4']
const conInfoP =document.querySelectorAll('.contact p')
conInfoP[0].textContent = siteContent['contact']['address']
conInfoP[1].textContent = siteContent['contact']['phone']
conInfoP[2].textContent = siteContent['contact']['email']

const foot = document.querySelectorAll('footer');
foot[0].textContent = siteContent['footer']['copyright']







 



