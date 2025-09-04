// script.js - lógica para cambiar título y calcular suma

document.addEventListener('DOMContentLoaded', function () {
    // Referencias del DOM
    const btnCambiar = document.getElementById('btnCambiar');
    const titulo = document.getElementById('titulo');

    const btnSumar = document.getElementById('btnSumar');
    const num1 = document.getElementById('num1'); 
    const num2 = document.getElementById('num2');
    const resultado = document.getElementById('resultado');

    // 1) Alternar el texto del título al presionar el botón
    btnCambiar.addEventListener('click', function () {
        if (titulo.textContent === 'Taller práctico final') {
            titulo.textContent = 'Título cambiado: práctica completada';
            titulo.textContent = 'Taller santiago';
        } else {
            titulo.textContent = 'Taller práctico final';
        }
    });

    // 2) Función que calcula la suma y muestra el resultado
    function calcularSuma() {
        const a = parseFloat(num1.value);// cadena tipo string 
        const b = parseFloat(num2.value);

        // Si el campo está vacío o no es número, lo tratamos como 0
        const primer = Number.isNaN(a) ? 0 : a;
        const segundo = Number.isNaN(b) ? 0 : b;

        const suma = primer + segundo;
        resultado.textContent = suma;
    }

    // Evento al hacer clic en "Calcular suma"
    btnSumar.addEventListener('click', calcularSuma);

    // Soporte para presionar Enter dentro de cualquiera de los inputs
    num1.addEventListener('keydown', function (e) { if (e.key === 'Enter') calcularSuma(); });
    num2.addEventListener('keydown', function (e) { if (e.key === 'Enter') calcularSuma(); });
});