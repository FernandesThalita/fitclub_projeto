//garatindo que que a animaAção correrá após o carregamento da página, com ADDEVENTLISTENER
document.addEventListener('DOMContentLoaded', function () {
    // Instanciando o ScrollReveal 
    const sr = ScrollReveal();

    //Aplicando animação no elemento com as classes img (header e section THE CLASS YOU WILL GET HERE)
    sr.reveal('.img, .class__img-1',{
        origin: 'right',  
        duration: 1000,  
        opacity: 0, 
        distance: '50px',  
        reset: true 
    });
    sr.reveal('.class__img-2,.join__image',{
        origin: 'left',  
        duration: 1000,  
        opacity: 0, 
        distance: '50px',  
        reset: true 
    });

    // Aplicando animação no elemento com a classe explore-card
    ScrollReveal().reveal('.price__card, .explore__card', {
        distance: '10px',
        duration: 2000,
        easing: 'ease-in-out',
        origin: 'bottom',
        delay: 100,
        opacity:0,
        reset: true 
    });
    // Aplicando animação no elemento com as classe explore-card
    ScrollReveal().reveal('h1', {
        distance: '30px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'left',
        delay: 100,
        opacity:0,
        reset:true
    });
 
});
