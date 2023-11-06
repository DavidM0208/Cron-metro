//  1000 milisegundos = 1 segundo
//  60 segundos = minutos
//  60 minutos = 1 hora
// Intervalo de refresco 10 * 100 milisegundos = 1000 milisegundos
let hr = mn = sg = ms = '0' + 0, iniciarTiempo;
const botonIniciar = document.querySelector('.iniciar');
const botonDetener = document.querySelector('.detener');
const botonReiniciar = document.querySelector('.reiniciar');
botonIniciar.addEventListener('click', iniciar);
botonDetener.addEventListener('click', detener);
botonReiniciar.addEventListener('click', reiniciar);
function iniciar() {
    botonIniciar.classList.add('on');
    iniciarTiempo = setInterval(() => {
        ms++;
        ms = ms < 10 ? '0' + ms : ms; // Esto es para concatener el cero a la izquierda si el número es menor a 10
        if (ms == 100) {
            sg++;
            sg = sg < 10 ? '0' + sg : sg;
            ms = '0' + 0;
        }
        if (sg == 60) {
            mn++;
            mn = mn < 10 ? '0' + mn : mn;
            sg = '0' + 0;
        }
        if (mn == 60) {
            hr++;
            hr = hr < 10 ? '0' + hr : hr;
            mn = '0' + 0;
        }
        ingresarValor();
    }, 10);
}
function detener() {
    botonDetener.classList.remove('on');
    clearInterval(iniciarTiempo); // Esto lo que hace es que detiene el tiempo en el punto en el que quedo y habilita el boton iniciar
}
function reiniciar() {
    botonIniciar.classList.remove('on');
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms = '0' + 0;
    ingresarValor();
}
function ingresarValor() {
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}