const rewardBtns = document.querySelectorAll(".pledge--btn");
const mainBtn = document.querySelector(".title--back-btn");

const modalPledge = document.querySelector(".container--modal");
const overlay = document.querySelector(".overlay");
const iconClose = document.querySelector(".icon--close");
const continueBtn = document.querySelectorAll(".modal--pledge_btns-continue");
const successModal = document.querySelector(".modal--success");
const successBtn = document.querySelector(".success--btn");
const radioBtns = document.querySelectorAll(".radio-button");
const modalPledges = document.querySelectorAll(".modal--pledge-top-cont");
const pledgeBtns = document.querySelectorAll(".modal--pledge_btns ");
const bookmarkBtn = document.querySelector(".title--back-bookmark ");

const counter = document.querySelector(".backed-amount");
const backers = document.querySelector(".backers-num");
// console.log(pledgeBtns);

console.log(modalPledge);

function checkRadio(el) {
  pledgeBtns.forEach((el) => {
    el.classList.add("hidden");
    el.parentElement.classList.remove("highlight");
  });
  if (el.checked) {
    el.parentElement.parentElement.parentElement.classList.add("highlight");
    el.parentElement.parentElement.nextElementSibling.classList.remove(
      "hidden"
    );
  }
}

function OpenrewardModal() {
  overlay.classList.remove("hidden");
  modalPledge.classList.remove("hidden");
  modalPledge.classList.add("active");
  window.scrollTo(0, 0);
}

function closeModal() {
  overlay.classList.add("hidden");
  modalPledge.classList.add("hidden");
  modalPledge.classList.remove("active");
}

function updateBacked(amount) {
  let moneyBacked = [...counter.innerText].slice(1).join("").replace(/,/g, "");
  let total = moneyBacked * 1 + amount * 1;
  counter.innerText = "$" + total.toLocaleString("en-US");
}

function updateBackers() {
  let num = backers.innerText;
  num = num.replace(/,/g, "") * 1;
  num++;
  backers.innerText = num.toLocaleString("en-US");
}

function openSuccessModal() {
  modalPledge.classList.add("hidden");
  modalPledge.classList.remove("active");
  successModal.classList.remove("hidden");
  successModal.classList.add("active");
  window.scrollTo(0, 0);
}

function successModalBtn(val) {
  let amount;

  if (!val) {
    openSuccessModal();
    updateBackers();

    return;
  } else if (val.value > 0) {
    amount = val.value;
  } else {
    amount = val.placeholder;
  }

  updateBacked(amount);
  updateBackers();
  openSuccessModal();
}

function closeSuccessModal() {
  successModal.classList.add("hidden");
  successModal.classList.remove("active");
  overlay.classList.add("hidden");
}

rewardBtns.forEach((el) => {
  el.addEventListener("click", OpenrewardModal);
});

mainBtn.addEventListener("click", OpenrewardModal);

overlay.addEventListener("click", closeModal);
iconClose.addEventListener("click", closeModal);

continueBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    successModalBtn(e.target.parentElement.children[0].children[0]);
  });
});

successBtn.addEventListener("click", closeSuccessModal);

modalPledges.forEach((el) => {
  el.addEventListener("click", function check(e) {
    checkRadio(e.target);
  });
});

let bookmarked = false;
console.log(bookmarkBtn);

function bookmark() {
  if (!bookmarked) {
    bookmarkBtn.lastElementChild.classList.add("bookmarked");
    bookmarkBtn.lastElementChild.textContent = "Bookmarked";
    bookmarkBtn.firstElementChild.classList.add("icon-bookmarked");
    bookmarked = true;
  } else {
    bookmarkBtn.lastElementChild.textContent = "Bookmark";

    bookmarkBtn.lastElementChild.classList.remove("bookmarked");
    bookmarkBtn.firstElementChild.classList.remove("icon-bookmarked");
    bookmarked = false;
  }
}

bookmarkBtn.addEventListener("click", bookmark);

const mobileNav = document.querySelector(".mobile--nav-menu");
const mobileBtnOpen = document.querySelector(".mobile--nav-icon-open");
const mobileBtnClose = document.querySelector(".mobile--nav-icon-close");

function mobileMenu() {
  mobileBtnOpen.classList.toggle("hidden");
  mobileBtnClose.classList.toggle("hidden");
  mobileNav.classList.toggle("hidden");
}

mobileBtnOpen.addEventListener("click", mobileMenu);
mobileBtnClose.addEventListener("click", mobileMenu);
