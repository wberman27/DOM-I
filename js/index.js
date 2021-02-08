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
    "h1": "DOM Is Awesome",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])






//Nav ****
//get nav and set as array
const nav = document.querySelectorAll("nav a");
const navArray = Array.from(nav)
//make each a tag in array have appropriate text
const services = navArray[0];
services.textContent = siteContent["nav"]["nav-item-1"]

const product = navArray[1];
product.textContent = siteContent["nav"]["nav-item-2"]

const vision = navArray[2];
vision.textContent = siteContent["nav"]["nav-item-3"]

const features = navArray[3];
features.textContent = siteContent["nav"]["nav-item-4"]

const about = navArray[4];
about.textContent = siteContent["nav"]["nav-item-5"]

const contact = navArray[5];
contact.textContent = siteContent["nav"]["nav-item-6"]








//CTA ****
//code snippet img

const codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"])

//cta text (dom is awesome)
const awesomeDom = document.querySelector(".cta h1");
awesomeDom.textContent = siteContent["cta"]["h1"];

//'get started' button
const button = document.querySelector(".cta button");
button.textContent = siteContent["cta"]["button"];







//Main-content ****

//top content
//top content headers Array
const topContentHeader = document.querySelectorAll(".top-content .text-content h4");
const topHArray = Array.from(topContentHeader);

//feature content header
const feature = topHArray[0];
feature.textContent = siteContent["main-content"]["features-h4"]

//about content header
const aboutH = topHArray[1];
aboutH.textContent = siteContent["main-content"]["about-h4"]

//top content paragraph Array
const topContentP = document.querySelectorAll(".top-content .text-content p");
const topPArray = Array.from(topContentP);

//feature P
const featureP = topPArray[0];
featureP.textContent = siteContent["main-content"]["features-content"];

//about P
const aboutP = topPArray[1];
aboutP.textContent = siteContent["main-content"]["about-content"];

//content image
const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);



//bottom-content
//bottom content headers Array
const botContentHeader = document.querySelectorAll(".bottom-content .text-content h4");
const botHArray = Array.from(botContentHeader);

//services content header
const serviceH = botHArray[0];
serviceH.textContent = siteContent["main-content"]["services-h4"]

//product content header
const productH = botHArray[1];
productH.textContent = siteContent["main-content"]["product-h4"]

//vision content header
const visionH = botHArray[2];
visionH.textContent = siteContent["main-content"]["vision-h4"]


//bottom content paragraph Array
const botContentP = document.querySelectorAll(".bottom-content .text-content p");
const botPArray = Array.from(botContentP);

//services P
const servicesP = botPArray[0];
servicesP.textContent = siteContent["main-content"]["services-content"];

//procuct P
const productP = botPArray[1];
productP.textContent = siteContent["main-content"]["product-content"];

//vision P
const visionP = botPArray[2];
visionP.textContent = siteContent["main-content"]["vision-content"];
