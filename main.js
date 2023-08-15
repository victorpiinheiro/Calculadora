
function Calculadora() {
    this.digito = document.querySelector('.digitos');
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', (e) => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('bt-num')) this.numerosDigitados(el);
            if (el.classList.contains('bt-eq')) this.realizaConta();
            if (el.classList.contains('bt-apaga')) this.Apaga();
            if (el.classList.contains('bt-del')) this.apagaUtimoDigito();
        });
    }

    this.numerosDigitados = (e) => {
        this.digito.innerHTML += e.innerHTML;
        this.display.value += e.innerHTML;
        this.display.focus();
    }

    this.Apaga = () => {
        this.display.value = '';
        this.digito.innerHTML = '';
    }

    this.apagaUtimoDigito = () => {
        this.display.value = this.display.value.slice(0, -1);
        this.digito.innerHTML = this.digito.innerHTML.slice(0, -1);
        if (!this.display.value) {
            this.digito.innerHTML = '';
        };
        this.display.focus();

    }

    this.realizaConta = () => {

        try {
            let conta = eval(this.display.value);
            if (!conta && conta !== 0) {
                alert('Conta invalida');
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
        };
    };
}


const calculadora = new Calculadora();
calculadora.inicia();