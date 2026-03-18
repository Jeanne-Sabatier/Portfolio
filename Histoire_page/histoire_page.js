const containers = document.querySelectorAll('.container');

const line = document.createElement('div');
line.classList.add('timeline-line');
document.querySelector('.timeline').appendChild(line);

function isInViewport(el, offset = 100) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - offset;
}

function handleScroll() {
    containers.forEach(container => {
        if (isInViewport(container)) {
            container.style.opacity = 1;
            container.style.transform = 'translateY(0)';
        } else {
            container.style.opacity = 0;
            container.style.transform = 'translateY(-30px)';
        }
    });

    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll;
    line.style.transform = `scaleY(${scrollPercent})`;
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', handleScroll);
