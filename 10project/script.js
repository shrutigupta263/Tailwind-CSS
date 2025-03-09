var steps = document.querySelectorAll(".step");
var progress = document.getElementById("progress");
var stepTitle = document.getElementById("step-title");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var submitBtn = document.getElementById("submitBtn");
var currentStep = 0;
function showStep(step) {
    steps.forEach(function (s, i) {
        s.classList.toggle("hidden", i !== step);
    });
    progress.style.width = "".concat(((step + 1) / steps.length) * 100, "%");
    stepTitle.textContent = "Step ".concat(step + 1, " of ").concat(steps.length);
    prevBtn.classList.toggle("hidden", step === 0);
    nextBtn.classList.toggle("hidden", step === steps.length - 1);
    submitBtn.classList.toggle("hidden", step !== steps.length - 1);
}
nextBtn.addEventListener("click", function () {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
});
prevBtn.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});
document.getElementById("multiStepForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form Submitted Successfully!");
});
showStep(currentStep);
