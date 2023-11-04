document.addEventListener('DOMContentLoaded', (event) => {
    const presentationSection = document.querySelector('.presentation');

    function checkIfElementInView() {
        const rect = presentationSection.getBoundingClientRect();
        const isInView = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= 0);

        if (isInView) {
            presentationSection.classList.add('active');
        }
    }

    window.addEventListener('scroll', checkIfElementInView);
    checkIfElementInView(); // Appeler cette fonction au chargement au cas où la section est déjà en vue
});


document.addEventListener('DOMContentLoaded', (event) => {
    const presentationSection = document.querySelector('.projets');

    function checkIfElementInView() {
        const rect = presentationSection.getBoundingClientRect();
        const isInView = (rect.top <= window.innerHeight * 0.6) && (rect.bottom >= 0);

        if (isInView) {
            presentationSection.classList.add('active');
        }
    }

    window.addEventListener('scroll', checkIfElementInView);
    checkIfElementInView(); // Appeler cette fonction au chargement au cas où la section est déjà en vue
});