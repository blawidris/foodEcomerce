const mobile = document.querySelector(".menu-toggle");
const mobilenav = document.querySelector(".menu-list");

mobile.addEventListener("click", function () {
  mobile.classList.toggle("is-active");
  mobilenav.classList.toggle("active");
});

mobilenav.addEventListener("click", function () {
  const menuBars = document.querySelector(".is-active");

  if (window.innerWidth < 768 && menuBars) {
    mobile.classList.toggle("is-active");
    mobilenav.classList.toggle("active");
  }
});
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
});

// isotope js
const elem = document.querySelector(".product-wrapper");
const iso = new Isotope(elem, {
  itemSelector: ".product-card",
  layoutMode: "fitRows",
});

const filter = document.querySelector("#filter");
filter.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, "button")) {
    return;
  }

  var filterValue = event.target.getAttribute("data-filter");

  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons

const buttonGroups = document.querySelectorAll("filter-group");
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  buttonGroups = buttonGroups[i];
  radioButtonGroup(buttonGroups);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "button")) {
      return;
    }

    buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
    event.target.classList.remove("is-checked");
  });
}
