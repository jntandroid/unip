// Credenciais:
// Login (RA): kitkety
// Senha: 1130amor

const RA_CORRETO = "KITKETY";
const SENHA_CORRETA = "1130amor";

const loginForm = document.getElementById("login-form");

if (loginForm) {
    const loginError = document.getElementById("login-error");
    const raInput  = document.getElementById("ra");
    const senhaInput = document.getElementById("senha");

    // Linha azul bebê em foco
    function addFocusHandlers(input) {
        if (!input) return;
        const wrapper = input.closest(".field-with-icon");
        if (!wrapper) return;

        input.addEventListener("focus", () => {
            wrapper.classList.add("focused");
        });

        input.addEventListener("blur", () => {
            wrapper.classList.remove("focused");
        });
    }

    addFocusHandlers(raInput);
    addFocusHandlers(senhaInput);

    // Validação de login
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const ra = raInput.value.trim().toUpperCase();
        const senha = senhaInput.value.trim();

        if (ra === RA_CORRETO && senha === SENHA_CORRETA) {
            if (loginError) loginError.textContent = "";
            window.location.href = "aluno.html";
        } else {
            if (loginError) {
                loginError.textContent = "Matrícula ou senha inválidos.";
            }
        }
    });
}
