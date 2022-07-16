let nav = document.querySelector("nav");
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let resume = document.querySelector("#resume");
let skills = document.querySelector("#skills");
let works = document.querySelector("#works");
let contact = document.querySelector("#contact");
let menu = document.querySelector(".menu");
let links = document.querySelector("nav .links");
let linksAnchors = document.querySelectorAll("nav .links a");
let menuToggle = 0;

console.log(linksAnchors);
menu.onclick = function () {
  if (menuToggle == 0) {
    links.style.left = "0%";
    menuToggle++;
    linksAnchors.forEach(function (anchor) {
      anchor.onclick = function () {
        links.style.left = "-100%";
        menuToggle = 0;
      };
    });
  } else {
    links.style.left = "-100%";
    menuToggle = 0;
  }
};

window.onscroll = function () {
  console.log(scrollY);
  if (scrollY > 0 && scrollY < 296) {
    nav.style.display = "block";
    nav.classList.remove("show");
  } else if (scrollY >= 296 && scrollY < 740) {
    nav.style.display = "none";
  } else if (scrollY > 1080) {
    nav.style.display = "block";
    nav.classList.add("show");
  } else {
  }
  if (scrollY >= 0 && scrollY <= 1085) {
    home.classList.add("active");
    about.classList.remove("active");
    resume.classList.remove("active");
    skills.classList.remove("active");
    works.classList.remove("active");
    contact.classList.remove("active");
  } else if (scrollY > 1086 && scrollY <= 1626) {
    about.classList.add("active");
    home.classList.remove("active");
    resume.classList.remove("active");
    skills.classList.remove("active");
    works.classList.remove("active");
    contact.classList.remove("active");
  } else if (scrollY > 1627 && scrollY <= 2963) {
    resume.classList.add("active");
    home.classList.remove("active");
    about.classList.remove("active");
    skills.classList.remove("active");
    works.classList.remove("active");
    contact.classList.remove("active");
  } else if (scrollY > 2964 && scrollY <= 4045) {
    skills.classList.add("active");
    home.classList.remove("active");
    about.classList.remove("active");
    resume.classList.remove("active");
    works.classList.remove("active");
    contact.classList.remove("active");
  } else if (scrollY > 4046 && scrollY <= 4527) {
    works.classList.add("active");
    home.classList.remove("active");
    about.classList.remove("active");
    resume.classList.remove("active");
    skills.classList.remove("active");
    contact.classList.remove("active");
  } else if (scrollY > 4528) {
    contact.classList.add("active");
    home.classList.remove("active");
    about.classList.remove("active");
    resume.classList.remove("active");
    skills.classList.remove("active");
    works.classList.remove("active");
  }
};

function solution(phone_numbers, phone_owners, number) {
  let state = false;
  for (let i = 0; i < phone_numbers.length; i++) {
    if(number == phone_numbers[i]){
      state = false;
      return phone_owners[i];
    }else{
      state =true;
    }
  }
  if(state){
    return number;
  }
 
  if(phone_numbers.includes(number)){
    for (let i = 0; i < phone_numbers.length; i++) {
      if(number == phone_numbers[i]){
        return phone_owners[i];
      }
    }
  }else{
    return number;
  }
}


function solution(A) {
  // (n & 3) == 0
  let arr = A;
  arr.sort().reverse();
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if((arr[i] & 3) == 0){
      return arr[i];
      break;
    }
  }
}

