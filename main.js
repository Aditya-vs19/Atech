const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
window.addEventListener("load", function(){
    // Wait for 2 seconds and  hide loader
    setTimeout(() => {
      document.getElementById("loader-overlay").classList.add("hidden");
      document.getElementById("content").style.display = "block";
    }, 2000);
  });

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  toggleBtn.textContent = "☀️";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  if (body.classList.contains("light-theme")) {
    toggleBtn.textContent = "☀️";                                  //idea drop
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
