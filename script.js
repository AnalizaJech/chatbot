
// Mostrar/Ocultar Ventana del Chatbot
const botButton = document.getElementById('bot-button');
const chatbotWindow = document.getElementById('chatbot-window');

// Asegurarse de que los elementos existan antes de agregar eventos
if (botButton && chatbotWindow) {
    botButton.addEventListener('click', () => {
        // Alternar la visibilidad del chatbot
        if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
            chatbotWindow.style.display = 'flex';
            botButton.innerHTML = '<img src="src/cerrar-bot.svg" alt="Cerrar">';
        } else {
            chatbotWindow.style.display = 'none';
            botButton.innerHTML = '<img src="src/bot.svg" alt="Chatbot">';
        }
    });
}