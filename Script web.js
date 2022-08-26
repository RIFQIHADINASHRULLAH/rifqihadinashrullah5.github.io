//mengatur javascript agar bisa berfungsi pada article image pertama Sub bagian dari Artikel MPLS yang berisi tentang Penegnalan lingkungan sekolah
const articelimage = document.querySelector(".articel-image");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  articelimage.appendChild(heart);
  times.innerHTML = ++timesClicked;
  setTimeout(() => heart.remove(), 1000);
};

articelimage.addEventListener("click", (e) => {
  // you can use dblclick: https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
  if (clickTime === 0) clickTime = new Date().getTime();
  else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else clickTime = new Date().getTime();
  }
});

//mengatur javascript agar bisa berfungsi pada bagian Navigasi
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));

//mengatur javascript agar bisa berfungsi pada Teks yang bergerak untuk timbul di bagian heder, Selamat Datang Di Web Saya
const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "Selamat Datang Di Web Saya";
let index = 1;
let speed = 300 / speedElement.value;

const writeText = () => {
  textElement.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
  setTimeout(writeText, speed);
};

writeText();


