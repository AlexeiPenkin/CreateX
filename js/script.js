// Переменные - Popup Subscribe //
const popupSubscribe = document.querySelector(".popup.subscribe");
const formSubscribe = popupSubscribe.querySelector("form.form-subscribe");
const navSubscribeButton = document.querySelector(".subscribe__subscribe-btn");
const popupSubscribeCloseButton = document.querySelector(".popup.subscribe .popup__close-button");

// Функция открытия модального окна //
function openPopupSubscribe(popupSubscribe) {
    popupSubscribe.classList.add("popup_opened");
}

// Функция закрытия модального окна //
function closePopupSubscribe(popupSubscribe) {
    popupSubscribe.classList.remove("popup_opened");
}

// Subscribe - кнопка новостной подписки //
navSubscribeButton.addEventListener("click", () => {
  openSubscribeForm();
});

formSubscribe.reset();

// открытие формы Subscribe
function openSubscribeForm() {
  openPopupSubscribe(popupSubscribe);
}

// отправка формы Subscribe
function submitSubscribeForm(evt) {
  evt.preventDefault();
  closePopupSubscribe(popupSubscribe);
}
formSubscribe.addEventListener("submit", submitSubscribeForm);

// закрытие формы Subscribe по кнопке закрытия
popupSubscribeCloseButton.addEventListener("click", () =>
  closePopupSubscribe(popupSubscribe)
);


// Переменные - Popup Send CV //
const popupCV = document.querySelector(".popup.cv");
const formCV = popupCV.querySelector("[name='form-cv']");
const navCVButton = document.querySelector(".subscribe__submit-btn");
const popupCVCloseButton = document.querySelector(".popup.cv .popup__close-button");

// Функция открытия модального окна //
function openPopupCV(popupCV) {
    popupCV.classList.add("popup_opened");
  }
  
  // Функция закрытия модального окна //
  function closePopupCV(popupCV) {
    popupCV.classList.remove("popup_opened");
  }
  
  // Send CV - кнопка отправки резюме //
  navCVButton.addEventListener("click", () => {
    openCVForm();
  });
  
  formCV.reset();
  
  // открытие формы Subscribe
  function openCVForm() {
    openPopupCV(popupCV);
  }
  
  // отправка формы Subscribe
  function submitCVForm(evt) {
    evt.preventDefault();
    closePopupCV(popupCV);
  }
  formCV.addEventListener("submit", submitCVForm);
  
  // закрытие формы CV по кнопке закрытия
  popupCVCloseButton.addEventListener("click", () =>
    closePopupCV(popupCV)
  );
