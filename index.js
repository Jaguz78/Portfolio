window.addEventListener('load', () => {
    new Glider(document.querySelector('.certificates-container'), {
        type: 'carousel',
        dots: '.indicadores',
        arrows: {
            prev: '.anterior',
            next: '.siguiente'
        }
    }) 
})