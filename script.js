function atualizarContador() {
    // Data de término
    const dataFinal = new Date('2024-09-29T00:00:00');

    // Data atual
    const agora = new Date();

    // Calcula a diferença em milissegundos
    const diferenca = dataFinal - agora;

    // Calcula os componentes da contagem regressiva
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza o texto do contador
    document.getElementById('dias-numero').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas-numero').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos-numero').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos-numero').textContent = String(segundos).padStart(2, '0');
}

// Atualiza o contador imediatamente
atualizarContador();

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);





let indiceFoto = 0;
const totalFotos = 13;
const carrossel = document.querySelector('.carrossel');

function mudarFoto(direcao) {
    indiceFoto += direcao;

    carrossel.style.transition = 'transform 0.5s ease-in-out';
    carrossel.style.transform = `translateX(-${indiceFoto * 100}%)`;

    if (indiceFoto === totalFotos) {
        setTimeout(() => {
            carrossel.style.transition = 'none';
            carrossel.style.transform = `translateX(0)`;
            indiceFoto = 0;
        }, 500); // Deve coincidir com a duração da transição
    } else if (indiceFoto < 0) {
        carrossel.style.transition = 'none';
        indiceFoto = totalFotos - 1;
        carrossel.style.transform = `translateX(-${indiceFoto * 100}%)`;
        setTimeout(() => {
            carrossel.style.transition = 'transform 0.5s ease-in-out';
        }, 0);
    }
}

// Função para começar o carrossel automático
function iniciarCarrosselAutomatico() {
    setInterval(() => {
        mudarFoto(1);
    }, 4000); // Muda a cada 3 segundos
}

iniciarCarrosselAutomatico();