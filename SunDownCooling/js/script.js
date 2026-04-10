document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      let valid = true;

      document.querySelectorAll("input[required]").forEach(input => {
        if (input.value === "") {
          valid = false;
        }
      });

      if (!valid) {
        alert("Please fill out all fields");
        e.preventDefault();
      }
    });
  }
});