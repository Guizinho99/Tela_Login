/* Inicio Validação Tela de Cadastro */

const nombre = document.getElementById('nome');
const data = document.getElementById('date');
const number = document.getElementById('tel');
const sexo = document.getElementById('sex');
const msg = document.getElementById('prox');
const person = document.getElementById('user')

if (nombre) {
    nombre.addEventListener('input', (event) => {
        nombre.value = nombre.value.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres que não sejam letras
    });
}

// Permitir apenas números
if (number) {
    number.addEventListener('input', (event) => {
        number.value = number.value.replace(/[^0-9]/g, ''); // Remove caracteres que não sejam números
    });
}


if (msg) {
    msg.addEventListener("click", function (event) {
        event.preventDefault();

        if (nombre.value.trim() === "") {
            error("O campo Nome está vazio!", "linear-gradient(to right, #cd1809, #a01006)");
            nombre.style.border = '2px solid red';
            return;
        } else {
            nombre.style.border = '2px solid lime';
        }

        if (data.value.trim() === "") {
            error("O campo Data está vazio!", "linear-gradient(to right, #cd1809, #a01006)");
            data.style.border = '2px solid red';
            return;
        } else {
            data.style.border = '2px solid lime';
        }

        if (gmail.value.trim() === "") {
            error("O campo E-mail está vazio!", "linear-gradient(to right, #cd1809, #a01006)");
            gmail.style.border = '2px solid red';
            return;
        } else {
            gmail.style.border = '2px solid lime';
        }

        if (number.value.trim() === "") {
            error("O campo Telefone está vazio!", "linear-gradient(to right, #cd1809, #a01006)");
            number.style.border = '2px solid red';
            return;
        } else if (number.value.trim().length >= 1 || number.value.trim().length < 11) {
            error("Número de telefone deve conter pelo menos 11 dígitos!", "linear-gradient(to right, #cd1809, #a01006)");
            number.style.border = '2px solid red !important';
            return;
        } else {
            number.style.border = '2px solid lime';
        }

        if (person.value.trim() === "") {
            error("O campo Usuário está vazio!", "linear-gradient(to right, #cd1809, #a01006)");
            person.style.border = '2px solid red';
            return;
        } else {
            person.style.border = '2px solid lime';
        }

        if (sexo.value.trim() === "") {
            error("O campo Sexo está vazio!", "linear-gradient(to right, #cd1809, #a01006)");
            sexo.style.border = '2px solid red';
            return;
        } else {
            sexo.style.border = '2px solid lime';
        }

        const spinner2 = msg.querySelector('.spinner2');
        msg.innerHTML = ''; // Limpa o conteúdo do botão
        msg.appendChild(spinner2); // Adiciona o spinner ao botão
        spinner2.style.display = 'block'; // Mostra o spinner
        redirection("Estamos quase lá, agora você vai criar uma senha.", "senha.html", 4000);
    });
}

if (nombre) {
    nombre.addEventListener("blur", () => validateField(nombre));
}
if (data) {
    data.addEventListener("blur", () => validateField(data));
}
if (number) {
    number.addEventListener("blur", () => {
        if (number.value.trim() === "") {
            error("O campo Telefone está vazio!", "linear-gradient(to right, #cd1809, #a01006)");
            number.style.border = '2px solid red';
            return;
        } else if (number.value.trim().length >= 1 & number.value.trim().length < 11) {
            number.style.border = '2px solid red';
            error("Número de telefone deve conter pelo menos 11 dígitos!", "linear-gradient(to right, #cd1809, #a01006)");
        } else {
            number.style.border = '2px solid lime';
        }
    });
}
if (person) {
    person.addEventListener("blur", () => validateField(person));
}
if (sexo) {
    sexo.addEventListener("blur", () => validateField(sexo));
}

/* Fim Validação Tela de Cadastro */


/* Inicio Validação Tela de Senha/Esqueci Senha */

const password = document.getElementById('senha');
const confirmpassword = document.getElementById('confirm');
const next = document.getElementById('togow');
const alerta = document.getElementById('togo');
const gmail = document.getElementById('email');


if (gmail) {
    gmail.addEventListener("blur", () => validateEmailField(gmail));
}

if (next) {
    next.addEventListener("click", function (event) {
        event.preventDefault();
        if (validatePasswordFields()) {
            const spinner3 = next.querySelector('.spinner3');
            next.innerHTML = ''; // Limpa o conteúdo do botão
            next.appendChild(spinner3); // Adiciona o spinner ao botão
            spinner3.style.display = 'block'; // Mostra o spinner
            redirection("Parabéns você realizou o cadastro em nosso site!", "index.html", 4000);
        }
    });
}

if (alerta) {
    alerta.addEventListener("click", function (event) {
        event.preventDefault();
        if (validatePasswordandEmailFields()) {
            const spinner1 = alerta.querySelector('.spinner1');
            alerta.innerHTML = ''; // Limpa o conteúdo do botão
            alerta.appendChild(spinner1); // Adiciona o spinner ao botão
            spinner1.style.display = 'block'; // Mostra o spinner
            redirection("Parabéns você redefiniu sua senha! Você será redirecionado para a tela de login.", "index.html", 4000);
        }
    });
}

/* Fim Validação Tela de Senha/Esqueci Senha */

/* Inicio Validação Input Index/Tela de Login */

const login = document.getElementById('fazer');
const usuario = document.getElementById('user');
const pass = document.getElementById('senha');

usuario.addEventListener("blur", confere);
pass.addEventListener("blur", very);

if (login) {
    login.addEventListener("click", function (event) {
        event.preventDefault();

        if (usuario.value === "" || pass.value === "") {
            error("Campo de usuário ou senha em branco!", "linear-gradient(to right, #cd1809, #a01006)");
            return;
        } else if (usuario.value.length < 12 || pass.value.length < 6) {
            error("Verifique o campo de usuário ou senha, algo está faltando.", "linear-gradient(to right, #cd1809, #a01006)");
            return;
        }

        const spinner = login.querySelector('.spinner');
        login.innerHTML = ''; // Limpa o conteúdo do botão
        login.appendChild(spinner); // Adiciona o spinner ao botão
        spinner.style.display = 'block'; // Mostra o spinner
        redirection(`Login realizado ${usuario.value}, fico feliz que voltou!`, "Tela_Inicia.html", 4000);
    });
}

/* Fim Validação Input Index/Tela de Login */

/* Inicio Funções */

function validateField(field) {
    if (field.value.trim() === "") {
        field.style.border = '2px solid red'; // Campo vazio
    } else {
        field.style.border = '2px solid lime'; // Campo preenchido
    }
}

function redirection(message, target, duration) {
    Toastify({
        text: message,
        duration: duration,
        close: true,
        gravity: "top", // `top` ou `bottom`
        position: "right", // `left`, `center` ou `right`
        stopOnFocus: true, // Impede o fechamento ao passar o mouse
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback após clicar
    }).showToast();

    // Redireciona após o tempo do toast
    setTimeout(() => {
        window.location.href = target;
    }, duration); // Tempo em milissegundos
}

function error(message, color) {
    Toastify({
        text: message,
        duration: 2500,
        close: true,
        gravity: "top", // `top` ou `bottom`
        position: "right", // `left`, `center` ou `right`
        stopOnFocus: true, // Impede o fechamento ao passar o mouse
        style: {
            background: color,
        },
        onClick: function () { } // Callback após clicar
    }).showToast();
}

function confere() {
    if (usuario.value.length >= 0 & usuario.value.length <= 11) {
        usuario.style.border = "";
    }
    else {
        usuario.style.border = '2px solid lime';
    }
}

function very() {
    if (pass.value.length >= 0 & pass.value.length <= 5) {
        pass.style.border = "";
    }
    else {
        pass.style.border = '2px solid lime';
    }
}


function validateEmailField(gmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(gmail.value)) {
        error("Formato de e-mail inválido!", "linear-gradient(to right, #cd1809, #a01006)");
        gmail.style.border = '2px solid red';
        return false;
    }
    else {
        error("Formato de e-mail válido!", "linear-gradient(to right, #00b09b, #96c93d)");
        gmail.style.border = '2px solid lime';
    }
    return true; // E-mail válido
}

// Função para validar os campos de senha
function validatePasswordFields() {
    if (!password || !confirmpassword) return false;

    // Verificar se os campos estão preenchidos
    if (password.value.trim() === "" || confirmpassword.value.trim() === "") {
        error("Verifique os campos, eles podem estar em branco!", "linear-gradient(to right, #cd1809, #a01006)");
        return false;
    }

    // Verificar o tamanho mínimo
    if (password.value.length < 6 || confirmpassword.value.length < 6) {
        error("As senhas devem conter pelo menos 6 caracteres.", "linear-gradient(to right, #cd1809, #a01006)");
        return false;
    }

    // Verificar se as senhas coincidem
    if (password.value !== confirmpassword.value) {
        error("As senhas não coincidem.", "linear-gradient(to right, #cd1809, #a01006)");
        password.style.border = '2px solid red';
        confirmpassword.style.border = '2px solid red';
        return false;
    } else {
        password.style.border = '2px solid lime';
        confirmpassword.style.border = '2px solid lime';
        return true;
    }
}

function OlharSenha() {
    var olho = document.getElementById('olho');

    // Verifica se o tipo de input é 'password' ou 'text'
    if (pass.type === 'password') {
        pass.type = 'text'; // Mostra a senha
        olho.innerHTML = '<i class="bx bxs-hide"style="color:#ffffff"></i>'; // Ícone de "visibilidade reduzida"
    } else {
        pass.type = 'password'; // Esconde a senha
        olho.innerHTML = '<i class="bx bxs-hide"></i>'; // Ícone de "olho fechado"
    }
}

function OlharSenha2() {
    var olho2 = document.getElementById('olho2');

    // Verifica se o tipo de input é 'password' ou 'text'
    if (password.type === 'password' && confirmpassword.type === 'password') {
        password.type = 'text'; // Mostra a senha
        confirmpassword.type = 'text';
        olho2.innerHTML = '<i class="bx bxs-hide"style="color:#ffffff"></i>'; // Ícone de "visibilidade reduzida"
    } else {
        password.type = 'password'; // Esconde a senha
        confirmpassword.type = 'password';
        olho2.innerHTML = '<i class="bx bxs-hide"></i>'; // Ícone de "olho fechado"
    }
}

function validatePasswordandEmailFields() {
    if (!password || !confirmpassword) return false;

    // Verificar se os campos estão preenchidos
    if (password.value.trim() === "" || confirmpassword.value.trim() === "" || gmail.value.trim() === "") {
        error("Verifique os campos, eles podem estar em branco!", "linear-gradient(to right, #cd1809, #a01006)");
        return false;
    }

    // Verificar o tamanho mínimo
    if (password.value.length < 6 || confirmpassword.value.length < 6) {
        error("As senhas devem conter pelo menos 6 caracteres.", "linear-gradient(to right, #cd1809, #a01006)");
        return false;
    }

    // Verificar se as senhas coincidem
    if (password.value !== confirmpassword.value) {
        error("As senhas não coincidem.", "linear-gradient(to right, #cd1809, #a01006)");
        password.style.border = '2px solid red';
        confirmpassword.style.border = '2px solid red';
        return false;
    } else {
        password.style.border = '2px solid lime';
        confirmpassword.style.border = '2px solid lime';
        return true;
    }
}

/* Fim Funções */