const burgerOpen = document.querySelector('.header__burger');
const burgerClose = document.querySelector('.header__burger-close');
const menu = document.querySelector('.header__menu')



burgerOpen.addEventListener('click', () => {
  menu.classList.add('active')
  document.body.classList.add('lock')
})


burgerClose.addEventListener('click', () => {
  menu.classList.remove('active');
  document.body.classList.remove('lock')
})

document.addEventListener('click', e => {
  if (!e.target.closest('.header__menu, .header__burger')) {
    menu.classList.remove('active');
  }
})

const searchBtn = document.querySelector('.header__search-btn');
const searchBtnClose = document.querySelector('.header__search-close');
const searchInput = document.querySelector('.header__search');

searchBtn.addEventListener('click', () => {
  searchInput.classList.add('active-search')
})

searchBtnClose.addEventListener('click', () => {
  searchInput.classList.remove('active-search');
})

document.addEventListener('click', e => {
  if(!e.target.closest('.header__search, .header__search-btn')) {
    searchInput.classList.remove('active-search');
  }
})


const swiper = new Swiper('.hero__swiper', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})


const items = document.querySelectorAll('.how__tab-button');
const box = document.querySelectorAll('.how__tab-box');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', () => {
    items.forEach(item => item.classList.remove('btn--active'));
    box.forEach(elem => elem.classList.remove('tab--active'));
    box[i].classList.add('tab--active');
    items[i].classList.add('btn--active');
  })
}

const accHeader = document.querySelectorAll('.question__accardion-header');


accHeader.forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.classList.contains('accordion__show') ? notActive(item) : activeAccordion(item)
    accHeader.forEach(elem => {
      if (elem.parentElement != item.parentElement) notActive(elem) ;
    })
  })
})

function activeAccordion(item) {
  item.parentElement.classList.add('accordion__show');
  let panel = item.nextElementSibling
  if (!panel.style.maxHeight) {
    panel.style.maxHeight = panel.scrollHeight + 'px'
  }
}

function notActive(item) {
  item.parentElement.classList.remove('accordion__show');
  let panel = item.nextElementSibling
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null
  }
}


lazyload()
