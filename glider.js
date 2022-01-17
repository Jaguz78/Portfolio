window.addEventListener('load', () => {
    new Glider(document.querySelector('.certificates-container'), {
        type: 'carousel',
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '.indicadores',
        perView: 2,
        draggable: true,
        arrows: {
            prev: '.anterior',
            next: '.siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 500,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '2',

                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    })
})