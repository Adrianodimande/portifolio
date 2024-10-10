document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const form = e.target;
    const formData = new FormData(form);
    const responseMessage = document.getElementById('responseMessage');

    // Exibe a mensagem de "Processando..."
    responseMessage.innerHTML = '⏳ Processando...';
    responseMessage.className = 'text-blue-600 font-semibold';

    try {
        const response = await fetch('https://formsubmit.co/adrianovelemo76@gmail.com', {
            method: 'POST',
            body: formData
        });

        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
            responseMessage.innerHTML = '✅ Mensagem enviada com sucesso!';
            responseMessage.className = 'text-green-600 font-semibold';
            form.reset(); // Limpa o formulário após o envio
        } else {
            responseMessage.innerHTML = '❌ Erro ao enviar mensagem. Por favor, tente novamente mais tarde.';
            responseMessage.className = 'text-red-600 font-semibold';
        }
    } catch (error) {
        responseMessage.innerHTML = '❌ Erro de rede. Verifique sua conexão e tente novamente.';
        responseMessage.className = 'text-red-600 font-semibold';
    }
});
