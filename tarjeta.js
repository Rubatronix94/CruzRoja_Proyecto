document.querySelectorAll('.flip-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.classList.toggle('flipped');
    });
});
