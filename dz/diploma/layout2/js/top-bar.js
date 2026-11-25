export function initTopBar() {
  const closeBtn = document.querySelector(".button-close");
  const topBar = document.getElementById("topBar");

  if (!closeBtn || !topBar) {
    console.warn("Top-bar elements not found");
    return;
  }

  closeBtn.addEventListener("click", () => {
    topBar.classList.add("is-hidden");
  });
}
