const bhaiyaBtn = document.getElementById("bhaiya-btn");
const containerChild = document.querySelector(".container-child");
const notBhaiyaBtn = document.getElementById("not-bhaiya-btn");
const modal = document.getElementById("cute-modal");
const closeBtn = document.getElementById("close-modal");

bhaiyaBtn.addEventListener("mouseenter", () => {
  bhaiyaBtn.style.opacity = "0";
  bhaiyaBtn.style.pointerEvents = "none";
  bhaiyaBtn.style.userSelect = "none";
});

containerChild.addEventListener("mouseleave", () => {
  setTimeout(() => {
    bhaiyaBtn.style.opacity = "1";
    bhaiyaBtn.style.pointerEvents = "auto";
    bhaiyaBtn.style.userSelect = "auto";
  }, 100);
});

notBhaiyaBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.focus(); // Focus modal for a11y
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
});
