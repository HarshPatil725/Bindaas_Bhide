document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('drinkContainer');
    const image1 = document.querySelector('.image-1');
    const image2 = document.querySelector('.image-2');

    image1.style.backgroundImage = "url('assets/MilkShake.png')";
    image2.style.backgroundImage = "url('assets/MilkShake2.png')";

    for (let i = 0; i < 6; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 80 + 10}%`;
        petal.style.top = `${Math.random() * 40 + 10}%`;
        petal.style.transitionDelay = `${Math.random() * 0.5}s`;
        container.appendChild(petal);
    }

    for (let i = 0; i < 3; i++) {
        const splash = document.createElement('div');
        splash.className = 'splash';
        splash.style.left = `${Math.random() * 70 + 15}%`;
        splash.style.top = `${Math.random() * 70 + 15}%`;
        splash.style.width = `${Math.random() * 50 + 20}px`;
        splash.style.height = splash.style.width;
        splash.style.transitionDelay = `${0.2 + Math.random() * 0.3}s`;
        container.appendChild(splash);
    }

    container.addEventListener('mousemove', function (e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        if (container.matches(':hover')) {
            image2.style.transform = `scale(1.05) rotate(${xAxis / 10}deg) translateX(${xAxis / 2}px) translateY(${yAxis / 2}px)`;
        }
    });

    container.addEventListener('mouseleave', function () {
        image2.style.transform = 'scale(1) rotate(0)';
    });
});
