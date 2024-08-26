// ripple.js
export function addRippleEffect(event) {
    const target = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const size = 40; // 设定波纹的直径为40px（约合1.5厘米）
    const rect = target.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    target.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}
