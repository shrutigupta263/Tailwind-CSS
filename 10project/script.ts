const steps = document.querySelectorAll(".step");
const progress = document.getElementById("progress") as HTMLElement;
const stepTitle = document.getElementById("step-title") as HTMLElement;
const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;
const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;

let currentStep = 0;

function showStep(step: number) {
    steps.forEach((s, i) => {
        (s as HTMLElement).classList.toggle("hidden", i !== step);
    });

    progress.style.width = `${((step + 1) / steps.length) * 100}%`;
    stepTitle.textContent = `Step ${step + 1} of ${steps.length}`;

    prevBtn.classList.toggle("hidden", step === 0);
    nextBtn.classList.toggle("hidden", step === steps.length - 1);
    submitBtn.classList.toggle("hidden", step !== steps.length - 1);
}

nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

document.getElementById("multiStepForm")!.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
});

showStep(currentStep);
