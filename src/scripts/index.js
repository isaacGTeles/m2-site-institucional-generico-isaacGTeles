const modal = document.getElementById("modal");
const headerButton = document.querySelector(".button-header");
const faqButton = document.querySelector(".box-1 button");
const closeButton = document.querySelector(".close-button");

function openModal() {
    modal.showModal();
}

headerButton.addEventListener("click", openModal);
faqButton.addEventListener("click", openModal);
closeButton.addEventListener("click", () => modal.close());

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
})