/* 
  ========================================
  CODE-BASED - LOGIC
  ========================================
*/
const GROUP_RESULTS = Object.freeze({
    "10293": "passed",
    "49201": "failed",
    "": "failed"
});

const form = document.getElementById("code-form");
const codeInput = document.getElementById("group-code");
const errorMessage = document.getElementById("error-message");

if (form && codeInput && errorMessage) {
    const clearError = () => {
        errorMessage.textContent = "";
        codeInput.classList.remove("is-invalid");
        codeInput.removeAttribute("aria-invalid");
    };

    const showError = (message) => {
        errorMessage.textContent = message;
        codeInput.classList.add("is-invalid");
        codeInput.setAttribute("aria-invalid", "true");
        codeInput.focus();
        codeInput.select();
    };

    codeInput.addEventListener("input", clearError);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const rawValue = codeInput.value.trim();

        if (rawValue === "") {
            showError("Invalid Code. Please check your code and try again.");
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
        }

        showError("Invalid Code. Please check your code and try again.");
    });
} else {
    console.warn(
        "[Code-Based Result Portal] Could not find form/input/error elements. " +
        "Make sure IDs match: code-form, group-code, error-message"
    );
}