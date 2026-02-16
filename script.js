// 1. MODO OSCURO (Está perfecto)
const btnDarkMode = document.getElementById('btn-dark-mode');

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnDarkMode.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 2. WHATSAPP (Versión definitiva sin errores)
function contactarWhatsApp() {
    // Tu número real de Córdoba, sin símbolos, sin espacios y sin el "+"
    const miNumero = "5493513139109"; 
    
    // El mensaje que quieres recibir
    const texto = "Hola! Vi tu sitio web y quiero más información.";
    
    // Construimos la URL correctamente
    const urlFinal = "https://wa.me/" + miNumero + "?text=" + encodeURIComponent(texto);
    
    // Abrimos la pestaña
    window.open(urlFinal, '_blank');
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



