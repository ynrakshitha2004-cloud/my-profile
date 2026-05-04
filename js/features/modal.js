function initModal() {
  const modal = document.getElementById("contact-modal");
  const modalContent = document.getElementById("modal-content");
  const modalTrigger = document.getElementById("modal-trigger");
  const modalClose = document.getElementById("modal-close");
  const formCancel = document.getElementById("form-cancel");

  if (!modal || !modalContent || !modalTrigger || !modalClose || !formCancel) {
    console.log("❌ Modal elements not found");
    return;
  }

  let isOpen = false;

  function openModal() {
    if (isOpen) return;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden"); // 🔥 lock scroll

    setTimeout(() => {
      modalContent.classList.remove("scale-95", "opacity-0");
    }, 10);

    isOpen = true;
  }

  function closeModal() {
    if (!isOpen) return;

    modalContent.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden"); // 🔥 unlock scroll
    }, 200);

    isOpen = false;
  }

  // =============================
  // EVENTS
  // =============================

  modalTrigger.addEventListener("click", openModal);
  modalClose.addEventListener("click", closeModal);
  formCancel.addEventListener("click", closeModal);

  // Backdrop click
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // ESC key support 🔥
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  console.log("✅ Modal initialized");
}