// 1. MODO OSCURO
const btnDarkMode = document.getElementById('btn-dark-mode');

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnDarkMode.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 2. WHATSAPP
function contactarWhatsApp() {
    const telefono = "+54 9 3513 13-9109"; // Cambia por tu número (código país + número)
    const url = `https://wa.me/${telefono}?text=Hola! Quiero más información.`;
    window.open(url, '_blank');
}

// 3. ENVÍO DE FORMULARIO A EMAIL (VÍA FORMSPREE)
const form = document.getElementById('form-contacto');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita recarga de página

    const formData = new FormData(this);

    // Enviamos los datos
    const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert('¡Mensaje enviado con éxito! Te responderé pronto.');
        form.reset();
    } else {
        alert('Error al enviar. ¿Configuraste bien el ID de Formspree?');
    }

});
