// EVENTO PARA LA FUNCION DE ESCRITURA
const typed = new Typed('.typed',{
    strings: [
        'Técnico informático',
        'Desarrollador web',
        'Diseñador',
        'Fotógrafo',
    ],
    typeSpeed: 65,
    startDelay: 300,
    backSpeed: 75,
    backDelay: 1500,
    loop: true,
    contentType: 'html'
});

// MOSTRAR LOS SKILLS
function skills(){
    var barras = document.querySelectorAll('.card_barra');

    const cargarBarras = (entradas, observador) => {
        entradas.forEach((entrada) => {
            if(entrada.isIntersecting){
                entrada.target.classList.add('card_barra');
            } else {
                entrada.target.classList.remove('card_barra');
            }
        });
    }

    var observador = new IntersectionObserver(cargarBarras, {
        root: null,
        rootMargin: '100px 0px'
        // threshold: 1.0
    });

    for(var i = 0; i < barras.length; i++){
        observador.observe(barras[i]);
    }
}

skills();

// MENU PEGADO ARRIBA
const header = document.querySelector('.header');

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 1) {
      header.style.position = "fixed";
      header.style.padding = "10px 0"
      header.style.boxShadow = "2px 3px 10px 5px var(--dark-two)";
    } else {
      header.style.position = "relative";
      header.style.padding = "20px 0"
      header.style.boxShadow = "none";
    }
});

// BOTON DE VOLVER ARRIBA
const btnTop = document.querySelector('#btnTop');

btnTop.addEventListener('click', function(e){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

//FUNCION PARA QUE EL BOTONAPAREZCA DESPUES DE SCROLL
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      btnTop.style.display = "grid";
    } else {
      btnTop.style.display = "none";
    }
});

// FUNCION PARA EL MENU RESPONSIVO
const btnBurguer = document.querySelector('.btnBurguer');
const btnClose = document.querySelector('.btnClose');
const headerMenu = document.querySelector('.header_menu');

btnBurguer.addEventListener('click', function (){
    headerMenu.style.top = '0';
    headerMenu.style.transition = 'top 0.3s ease-in-out';
});

btnClose.addEventListener('click', function (){
    headerMenu.style.top = '-60vh';
    headerMenu.style.transition = 'top 0.3s ease-in-out';
});