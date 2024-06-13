document.addEventListener('DOMContentLoaded', () => {
    const astronaut = document.querySelector('.astronaut');
    const moon = document.querySelector('.moon');
    const radius = moon.offsetWidth / 2;
    const centerX = moon.offsetLeft + radius;
    const centerY = moon.offsetTop + radius;
    const speed = 0.05; // Speed of the orbit
    let angle = 0;

    function animate() {
        angle += speed;
        const x = centerX + radius * Math.cos(angle) - astronaut.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - astronaut.offsetHeight / 2;
        astronaut.style.left = `${x}px`;
        astronaut.style.top = `${y}px`;
        requestAnimationFrame(animate);
    }

    animate();
});
