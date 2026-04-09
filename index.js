//coneccion de servicio de emailjs
//template_rcq3p4k
//service_3q6uuo8
//DVVDqozF-3nCdhRdl

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;




function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX;
    const y = event.clientY;

    shapes.forEach((shape, i) => {
        const speed = (i + 1) * 0.05; // cada shape tiene velocidad distinta
        const direction = i % 2 === 0 ? -1 : 1;

        shape.style.transform = `translate(${x * speed * direction}px, ${y * speed * direction}px)`;
    });
}



function toggleContrast() {
   document.body.classList.toggle("dark-theme");
}

function contact(event) {
    event.preventDefault()
    const loading =  document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
 

    emailjs
    .sendForm(
        'service_3q6uuo8',
        'template_rcq3p4k',
        event.target,
        'DVVDqozF-3nCdhRdl'    
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('it worked')
    }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The email service is temporarily unavailable. Please contact me directly at magdalena.batres@gmail.com"
            );
     })          
 }


function toggleModal(){
  if (isModalOpen){
     isModalOpen = false; 
     return document.body.classList.remove("modal--open");
   }
    // toggle modal
   isModalOpen = true;
   document.body.classList.toggle("modal--open");
   //document.body.classList += " modal--open";
   
 }



