// Smart Student Hub - JavaScript

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".card button");

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      const cardTitle = button.parentElement.querySelector("h3").textContent;

      if (cardTitle === "Notes") {
        alert("📚 Notes section\n\nYour study notes will be available here.");
      }

      else if (cardTitle === "PYQs") {
        alert("📝 PYQs section\n\nPractice previous year questions here.");
      }

      else if (cardTitle === "Study Planner") {
        alert("📅 Study Planner\n\nPlan your daily study schedule here.");
      }

      else if (cardTitle === "Progress") {
        showProgress();
      }

    });

  });


  function showProgress() {
    const progress = localStorage.getItem("studyProgress") || 0;

    alert(
      "📊 Your Study Progress\n\n" +
      "Current Progress: " + progress + "%\n\n" +
      "Keep studying and stay consistent! 🚀"
    );
  }


  // Welcome message in console
  console.log("🎓 Smart Student Hub loaded successfully!");
});
