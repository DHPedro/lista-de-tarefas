// Aguarde o carregamento completo da página
window.addEventListener('load', function () {
    // Esconda a faixa cinza de carregamento após um pequeno atraso (1 segundo)
    setTimeout(function () {
        const loadingOverlay = document.querySelector('.loading-overlay');
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.pointerEvents = 'none';
    }, 1000);
});
