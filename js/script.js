const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
// const profile = document.querySelector('profile');
const navButton = document.querySelector('.profile__edit-button');
// let profileName = document.querySelector('.profile__name');
// let profileJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__form');
// let nameInput = formElement.querySelector('[name="name"]');
// let jobInput = formElement.querySelector('[name="job"]');


function openPopup() {
    popupElement.classList.add('popup_opened');
    // nameInput.value = profileName.textContent
    // jobInput.value = profileJob.textContent
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    // profileName.textContent = nameInput.value
    // profileJob.textContent = jobInput.value
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

function closePopup() {
    popupElement.classList.remove('popup_opened');
}
navButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
document.addEventListener('keyup', (event) => {
    if (event.key === "Escape") {
        closePopup();
    }
});