// 1. MODO OSCURO (Está perfecto)
const btnDarkMode = document.getElementById('btn-dark-mode');

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnDarkMode.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 2. WHATSAPP (Corregido)
function contactarWhatsApp() {
    // El número debe ir SIN el "+" y SIN guiones
    const telefono = "5493513139109"; 
    const mensaje = "Hola! Vi tu sitio web y quiero más información.";
    
    // La estructura debe ser: https://wa.me/NUMERO?text=MENSAJE
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
}

// 3. ENVÍO DE FORMULARIO (Agregué el cierre de llave "});" que faltaba al final)
const form = document.getElementById('form-contacto');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);

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
}); // <--- Faltaba cerrar esta llave y paréntesis

