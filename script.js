document.addEventListener('DOMContentLoaded', () => {
    // 1. CONFIGURACIÓN DE WHATSAPP
    const TELEFONO = "573243317129"; // <-- Reemplaza con tu número real

    const botones = document.querySelectorAll('.buy-btn');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.getAttribute('data-product');
            const precio = boton.getAttribute('data-price');
            const msj = `Hola! Me interesa este producto:%0A%0A*${nombre}*%0APrecio: ${precio}%0A%0A¿Sigue disponible?`;
            window.open(`https://wa.me/${TELEFONO}?text=${msj}`, '_blank');
        });
    });

    // 2. BUSCADOR EN TIEMPO REAL
    const buscador = document.getElementById('product-search');
    buscador.addEventListener('keyup', () => {
        const filtro = buscador.value.toLowerCase();
        const productos = document.querySelectorAll('.product-card');

        productos.forEach(card => {
            const texto = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = texto.includes(filtro) ? "block" : "none";
        });
    });
});