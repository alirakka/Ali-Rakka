const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList = isOpen ?
    'fa-solid fa-xmark' :
    'fa-solid fa-bars'
}
document.getElementById('button').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});

document.getElementById('btn').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('btn1').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('btn2').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('btn3').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('btn4').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('btn5').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('btn6').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('btn7').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const jobCards = document.querySelectorAll(".job-card");
  const previousArrow = document.querySelector(".previous");
  const nextArrow = document.querySelector(".next");
  const cardWidth = jobCards[0].offsetWidth;
  const numVisibleCards = Math.floor(slider.offsetWidth / cardWidth);

  let currentPosition = 0;

  previousArrow.addEventListener("click", function () {
    if (currentPosition > 0) {
      currentPosition--;
      slider.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
  });

  nextArrow.addEventListener("click", function () {
    if (currentPosition < jobCards.length - numVisibleCards) {
      currentPosition++;
      slider.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
  });
});