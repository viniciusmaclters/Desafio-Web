const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.modal-close').addEventListener("click", function() {
    modalOverlay.classList.remove("active")
})

document.querySelector('.modal-maximize').addEventListener("click", function() {
    modalOverlay.classList.contains("maximize")
})

