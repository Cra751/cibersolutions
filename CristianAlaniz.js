document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);
        
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500; 
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); 
            const easing = easeInOutQuad(progress);
            window.scrollTo(0, startPosition + distance * easing);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        requestAnimationFrame(animation);
    });
});

function actualizarFechaHora() {
    const ahora = new Date();
    document.getElementById('dia').textContent = ahora.getDate();
    document.getElementById('mes').textContent = ahora.getMonth() + 1; 
    document.getElementById('año').textContent = ahora.getFullYear();
    document.getElementById('hora').textContent = ahora.toLocaleTimeString();
}

actualizarFechaHora();