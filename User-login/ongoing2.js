// Add event listener to the "View Syllabus" button
const viewSyllabusBtn = document.getElementById("view-syllabus-btn");
const syllabus = document.getElementById("syllabus");

viewSyllabusBtn.addEventListener("click", () => {
  // Toggle the visibility of the syllabus with transition
  if (syllabus.classList.contains("visible")) {
    syllabus.classList.remove("visible");
    setTimeout(() => {
      syllabus.style.display = "none";
      viewSyllabusBtn.textContent = "View Syllabus";
      viewSyllabusBtn.classList.remove("hide-syllabus");
    }, 500); // Match the transition duration
  } else {
    syllabus.style.display = "block";
    setTimeout(() => {
      syllabus.classList.add("visible");
      viewSyllabusBtn.textContent = "Hide Syllabus";
      viewSyllabusBtn.classList.add("hide-syllabus");
    }, 10); // Slight delay to trigger transition
  }
});