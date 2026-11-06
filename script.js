/* 
  ========================================
  CODE-BASED - LOGIC
  ========================================
*/
const GROUP_RESULTS = Object.freeze({
    "GRATHANA RAGAWARNA": "passed",
    "BANUA SANGGONI": "failed",
    "TERBANG BALAESANG": "failed",
    "TEMU BALAESANG": "home"
});

const form = document.getElementById("code-form");
const codeInput = document.getElementById("group-code");
const errorMessage = document.getElementById("error-message");

if (form && codeInput && errorMessage) {
    const clearError = () => {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
        codeInput.classList.remove("is-invalid");
        codeInput.removeAttribute("aria-invalid");
    };

    const showError = (message) => {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
        codeInput.classList.add("is-invalid");
        codeInput.setAttribute("aria-invalid", "true");
        codeInput.focus();
        codeInput.select();
    };

    codeInput.addEventListener("input", clearError);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const rawValue = codeInput.value.trim().toUpperCase();

        if (rawValue === "") {
            showError("Invalid. Please try again.");
            return;
        }

        if (Object.hasOwn(GROUP_RESULTS, rawValue)) {
            const status = GROUP_RESULTS[rawValue];

            if (status === "passed") {
                window.location.href = "passed.html";
                return;
            }

            if (status === "failed") {
                window.location.href = "failed.html";
                return;
            }

            if (status === "home") {
                window.location.href = "https://temubalaesang.me";
                return;
            }
        }

        showError("Invalid. Please try again.");
    });
} else {
    console.warn(
        "[Code-Based Result Portal] Could not find form/input/error elements. " +
        "Make sure IDs match: code-form, group-code, error-message"
    );
}