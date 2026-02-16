/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");
const sec = document.getElementsByTagName("section");

const body = document.body;
const listitembtn = document.querySelectorAll('.burger_content_list_item');
const modal_writebtn_wrap = document.querySelectorAll('.modal_writebtn_wrap');

console.log(listitembtn);

if (document.querySelector('#hamb')) {
  hamb.addEventListener("click", hambHandler);
  close_popup.addEventListener("click", hambHandler);



  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    
  }

  for (let n = 0; n < listitembtn.length; n++) {
    listitembtn[n].addEventListener('click', function() {
       popup.classList.remove("open");
       console.log(111);
    });
  }
/*
  for (let l = 0; l < modal_writebtn_wrap.length; l++) {
    modal_writebtn_wrap[l].addEventListener('click', function() {
       popup.classList.remove("open");
       console.log(111);
    });
  }
*/
document.addEventListener('click', function(e) {
  if (e.target.closest('.modal_writebtn_wrap')) {
    const popup = document.querySelector('.popup');
    popup.classList.remove('open');
    console.log(111);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const popup = document.querySelector('.popup');
  const modalOverlay = document.querySelector('.modal-overlay');

  function updateNoScroll() {
    const isPopupOpen = popup?.classList.contains('open');
    const isModalOpen = modalOverlay?.classList.contains('show');

    if (isPopupOpen || isModalOpen) {
      body.classList.add('noscroll');
    } else {
      body.classList.remove('noscroll');
    }
  }

  // Проверка при загрузке
  updateNoScroll();

  // Следим за изменением классов
  const observer = new MutationObserver(updateNoScroll);

  popup && observer.observe(popup, {
    attributes: true,
    attributeFilter: ['class']
  });

  modalOverlay && observer.observe(modalOverlay, {
    attributes: true,
    attributeFilter: ['class']
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const popup = document.querySelector('.popup');
  const modalOverlay = document.querySelector('.modal-overlay2');

  function updateNoScroll() {
    const isPopupOpen = popup?.classList.contains('open');
    const isModalOpen = modalOverlay?.classList.contains('show');

    if (isPopupOpen || isModalOpen) {
      body.classList.add('noscroll');
    } else {
      body.classList.remove('noscroll');
    }
  }

  // Проверка при загрузке
  updateNoScroll();

  // Следим за изменением классов
  const observer = new MutationObserver(updateNoScroll);

  popup && observer.observe(popup, {
    attributes: true,
    attributeFilter: ['class']
  });

  modalOverlay && observer.observe(modalOverlay, {
    attributes: true,
    attributeFilter: ['class']
  });
});





}










if (document.querySelector('.modal-overlay')) {

const btns = document.querySelectorAll('.modal_writebtn');
const modalOverlay = document.getElementById('modalOverlay');
const modal_cont = document.getElementById('modal_cont');
const closeBtn = document.getElementById('closeBtn_modal');
const formModalOrderBtn = document.querySelector('.form_modal_order_btn');

// Функция открытия модального окна
function openModal() {
  modalOverlay.style.pointerEvents = 'auto';
  modalOverlay.classList.add('show');
  modal_cont.classList.add('show');
  document.body.classList.add('noscroll');
}

// Функция закрытия модального окна
function closeModal() {
  modal_cont.classList.remove('show');
  modalOverlay.classList.remove('show');
  document.body.classList.remove('noscroll');

  setTimeout(() => {
    modalOverlay.style.pointerEvents = 'none';
  }, 300);
}

// Открытие по любой кнопке .modal_order_btn
btns.forEach(button => {
  button.addEventListener('click', openModal);
});

// Закрытие по крестику
closeBtn.addEventListener('click', closeModal);


// Закрытие по клику на оверлей
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});


}


if (document.querySelector('.modal-overlay2')) {

const btnsl = document.querySelectorAll('.modal_writebtn_wrap');
const modalOverlayl = document.getElementById('modalOverlay2');
const modal_contl = document.getElementById('modal_cont2');
const closeBtnl = document.getElementById('closeBtn_modal2');


// Функция открытия модального окна
function openModall() {
  modalOverlayl.style.pointerEvents = 'auto';
  modalOverlayl.classList.add('show');
  modal_contl.classList.add('show');
  document.body.classList.add('noscroll');
}

// Функция закрытия модального окна
function closeModall() {
  modal_contl.classList.remove('show');
  modalOverlayl.classList.remove('show');
  document.body.classList.remove('noscroll');

  setTimeout(() => {
    modalOverlayl.style.pointerEvents = 'none';
  }, 300);
}

// Открытие по любой кнопке .modal_order_btn
btnsl.forEach(buttonl => {
  buttonl.addEventListener('click', openModall);
});

// Закрытие по крестику
closeBtnl.addEventListener('click', closeModall);


// Закрытие по клику на оверлей
modalOverlayl.addEventListener('click', (event) => {
  if (event.target === modalOverlayl) {
    closeModall();
  }
});


}













const phoneInput = document.querySelector("#phone");
const phoneInput2 = document.querySelector("#phone2");
const errorBlock = document.querySelector("#phone-error");

const iti = window.intlTelInput(phoneInput, {
  initialCountry: "ru",
  separateDialCode: true,
  nationalMode: true,
  preferredCountries: ["ru", "us", "kz", "by", "ua"],
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
});

const iti2 = window.intlTelInput(phoneInput2, {
  initialCountry: "ru",
  separateDialCode: true,
  nationalMode: true,
  preferredCountries: ["ru", "us", "kz", "by", "ua"],
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
});

const masks = {
  // СНГ
  ru: "(999) 999-99-99",
  ua: "(99) 999-99-99",
  by: "(99) 999-99-99",
  kz: "(999) 999-99-99",
  am: "(99) 999999",
  az: "(99) 999-99-99",
  ge: "(999) 99-99-99",
  md: "(999) 99-999",
  kg: "(999) 999-999",
  uz: "(99) 999-99-99",
  tj: "(99) 999-99-99",
  tm: "(9) 9999999",

  // Европа
  de: "9999 9999999",
  fr: "99 99 99 99 99",
  it: "999 999 9999",
  es: "999 99 99 99",
  gb: "9999 999999",
  pl: "999 999 999",
  nl: "99 99999999",
  be: "999 99 99 99",
  se: "99-999 99 99",
  no: "999 99 999",
  dk: "99 99 99 99",
  fi: "999 9999999",
  ch: "99 999 99 99",
  at: "9999 999999",
  pt: "999 999 999",
  ie: "999 999 9999",
  gr: "999 999 9999",
  cz: "999 999 999",
  sk: "999 999 999",
  hu: "99 999 9999",
  ro: "999 999 999",
  bg: "999 999 999",
  hr: "99 999 9999",
  si: "99 999 999",
  lt: "999 99999",
  lv: "9999 9999",
  ee: "9999 9999",

  // Северная Америка
  us: "(999) 999-9999",
  ca: "(999) 999-9999",
  mx: "(999) 999 9999",

  // Южная Америка
  br: "(99) 99999-9999",
  ar: "(99) 9999-9999",
  cl: "9 9999 9999",
  co: "999 9999999",
  pe: "999 999 999",
  ve: "999 9999999",

  // Ближний Восток
  tr: "(999) 999 99 99",
  il: "99-999-9999",
  ae: "99 999 9999",
  sa: "999 999 9999",
  ir: "999 999 9999",
  iq: "999 999 9999",
  jo: "9 9999 9999",
  kw: "9999 9999",
  qa: "9999 9999",
  om: "9999 9999",

  // Азия
  in: "99999 99999",
  cn: "999 9999 9999",
  jp: "99-9999-9999",
  kr: "99-9999-9999",
  th: "99 999 9999",
  vn: "999 999 9999",
  my: "99-999 9999",
  sg: "9999 9999",
  id: "999-999-9999",
  ph: "9999 999 999",
  pk: "999 9999999",
  bd: "9999-999999",
  lk: "99 999 9999",

  // Африка
  eg: "999 999 9999",
  za: "99 999 9999",
  ng: "999 999 9999",
  ke: "999 999999",
  gh: "999 999 999",
  dz: "9999 999999",
  ma: "99 999 9999",
  tn: "99 999 999",

  // Океания
  au: "9999 999 999",
  nz: "99 999 9999"
};

function applyMask() {
  const iso = iti.getSelectedCountryData().iso2;

  Inputmask.remove(phoneInput);

  if (masks[iso]) {
    Inputmask(masks[iso], {
      clearIncomplete: true,
      showMaskOnHover: false
    }).mask(phoneInput);
  } else {
    // универсальный fallback
    Inputmask("9{4,15}", {
      placeholder: "",
      showMaskOnHover: false
    }).mask(phoneInput);
  }
}

phoneInput.addEventListener("countrychange", applyMask);
applyMask();


function validatePhone() {
  if (!iti.isValidNumber()) {
    errorBlock.textContent = "Введите корректный номер";
    return false;
  }

  errorBlock.textContent = "";
  return true;
}

document.querySelector("#modal_content_container_form").addEventListener("submit", e => {
  if (!validatePhone()) {
    e.preventDefault();
  } else {
    console.log(iti.getNumber()); // полный номер +...
    return true;
  }
});







document.addEventListener('click', function (e) {
  const select = e.target.closest('.select');

  // клик вне селекта — закрываем все
  if (!select) {
    document.querySelectorAll('.select.open')
      .forEach(s => s.classList.remove('open'));
    return;
  }

  // клик по шапке
  if (e.target.closest('.select__head')) {
    document.querySelectorAll('.select.open')
      .forEach(s => {
        if (s !== select) s.classList.remove('open');
      });

    select.classList.toggle('open');
  }

  // выбор пункта
  const item = e.target.closest('.select__item');
  if (item) {
    select.querySelector('.select__value').textContent = item.textContent;
    select.dataset.value = item.dataset.value;
    select.classList.remove('open');
  }
});