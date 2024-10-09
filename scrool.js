
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.section');

        const options = {
            root: null, // usa a viewport do navegador como root
            rootMargin: '0px',
            threshold: 0.1 // Trigger quando 10% da seção está visível
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Para parar de observar após a primeira vez
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section); // Começa a observar cada seção
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const person = document.getElementById("person");
    
        // Para simular a animação após um tempo
        setTimeout(() => {
            person.classList.add("visible");
        }, 500); // Ajuste o tempo conforme necessário
    });
    