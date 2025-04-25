document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.opacity').forEach((img) => {
        img.addEventListener('mouseenter', () => {
        img.style.opacity = '0.5';
        }); 
        img.addEventListener('mouseleave', () => {
        img.style.opacity = '1';
        });
    })
});
