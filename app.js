(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open='date']"),
        closeModalBtn: document.querySelector("[data-modal-close='date']"),
        modal: document.querySelector("[data-modal='date']"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }

    document.getElementById("date-confirm").addEventListener("click", () => {
        const val = document.getElementById("date-input").value;
        if (val) {
            const [y, m, d] = val.split("-");
            document.getElementById("date-display").textContent = `${d}-${m}-${y}`;
        }
        refs.modal.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
    });
})();
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open='location']"),
        closeModalBtn: document.querySelector("[data-modal-close='location']"),
        modal: document.querySelector("[data-modal='location']"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }

    document.getElementById("location-confirm").addEventListener("click", () => {
        const val = document.getElementById("location-input").value.trim();
        if (val) {
            document.getElementById("location-display").textContent = val;
        }
        refs.modal.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
    });
})();
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open='login']"),
        closeModalBtn: document.querySelector("[data-modal-close='login']"),
        modal: document.querySelector("[data-modal='login']"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open='signup']"),
        closeModalBtn: document.querySelector("[data-modal-close='signup']"),
        modal: document.querySelector("[data-modal='signup']"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();