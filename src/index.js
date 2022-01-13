
let elementoMove;
let elementosDomSvg;
let partesMapaPuntos;
let recuadros;
let mapaAnimacionIntroSvg;
let contendorAutoresTexto = [
  'autorA-completo',
  'autorB-completo',
  'autorB-incompleto',
  'autorC-completo',
  'autorD-completo',
  'autorE-completo',
  'autorF-completo',
  'autorG-completo',
  'autorH-completo',
  'autorH-incompleto',
  'autorJ-completo',
  'autorK-completo',
  'autorL-completo',
  'autorM-completo',
  'autorN-completo',
  'autorO-completo'
]

let contendorAutoresTextoMobile = [
  'autorA-completo-Mobile',
  'autorB-completo-Mobile',
  'autorB-incompleto-Mobile',
  'autorC-completo-Mobile',
  'autorD-completo-Mobile',
  'autorE-completo-Mobile',
  'autorF-completo-Mobile',
  'autorG-completo-Mobile',
  'autorH-completo-Mobile',
  'autorH-incompleto-Mobile',
  'autorJ-completo-Mobile',
  'autorK-completo-Mobile',
  'autorL-completo-Mobile',
  'autorM-completo-Mobile',
  'autorN-completo-Mobile',
  'autorO-completo-Mobile'
]



let audio;
let audio2;
let path_sound = './assets/audios/'
let colorOriginal;


// Get the modal
let modal = document.getElementById("myModal");
let modalMapa = document.getElementById("myModalMapa");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

function init() {
  if (!verifyMobile()) {
    tippy(`.contenedor-pdf`, {
      content: 'Clic aquí',
    });

  }
  else {
    tippy(`.contenedor-pdf`, {
      content: 'Consultar Obra',
    });



  }

  document.querySelector('.descripcion-actividad-mobile').style.display = 'none'




  /* console.log(elementosDomSvgMapaBienvenida) */

  /*  audio = new Audio(`${path_sound}/Audio1.mp3`);
   audio.play();
   audio.loop = true */

}

function finAnimacion() {
  partesMapaPuntos.forEach(element => {
    if (!verifyMobile()) {
      gsap.fromTo(element, { scaleX: 0.5, scaleY: 0.5, transformOrigin: "50% 50%" }, { scaleX: 1.2, scaleY: 1.2, duration: 1, ease: Linear.easeNone, repeat: -1, yoyo: true });
    } else {
      gsap.fromTo(element, { scaleX: 1.1, scaleY: 1.1, transformOrigin: "50% 50%" }, { scaleX: 1.5, scaleY: 1.3, duration: 1.3, ease: Linear.easeNone, repeat: -1, yoyo: true });
    }

    element.style.cursor = 'pointer'
    /*     element.style.animation="bliks 3s infinity"; */
    element.addEventListener('click', mostrarFigura, false)
    /* element.addEventListener('touchstart', (e)=>{
      alert(e);
    }, false) */

    element.addEventListener('mouseover', tooltip, false)
    element.addEventListener('mouseout', ocultarTooltip, false)
    document.querySelector('.zoomIn').addEventListener('touchstart', ZoonInMapa, false)
    document.querySelector('.zoomOut').addEventListener('touchstart', ZoonOutMapa, false)

    document.querySelector('.UpZoom').addEventListener('touchstart', ZoonUpMapa, false)
    document.querySelector('.LeftZoom').addEventListener('touchstart', ZoonLeftMapa, false)
    document.querySelector('.DownZoom').addEventListener('touchstart', ZoonDownMapa, false)
    document.querySelector('.RigthZoom').addEventListener('touchstart', ZoonRigthMapa, false)
  });

  /*  tippy(`#C1`, {
     content: 'Clic aqui',
   }); */
  if (!verifyMobile()) {
  } else {
    document.querySelector('.zoomIn').style.display = 'block'
    document.querySelector('.zoomOut').style.display = 'block'
    document.querySelector('.UpZoom').style.display = 'block'
    document.querySelector('.LeftZoom').style.display = 'block'
    document.querySelector('.DownZoom').style.display = 'block'
    document.querySelector('.RigthZoom').style.display = 'block'
  }




  if (verifyMobile()) {
    modalMapa.style.display = "flex";
  }

  span.addEventListener('click', ocultarModal);
  modal.addEventListener('click', ocultarModalVentana)
  modalMapa.addEventListener('click', ocultarModalVentana)
}


function ZoonUpMapa(e) {
  e.preventDefault()
  gsap.fromTo(mapaAnimacionIntroSvg, { y: "+=30" }, { duration: 4, ease: Linear.easeNone });
}

function ZoonLeftMapa(e) {
  e.preventDefault()
  gsap.fromTo(mapaAnimacionIntroSvg, { x: "+=10" }, { duration: 4, ease: Linear.easeNone });
}

function ZoonDownMapa(e) {
  e.preventDefault()
  console.log(document.querySelector('.contenedor-mapa').style.transform, screen.height)
  if (mapaAnimacionIntroSvg.y < screen.height) {

  } else {
    gsap.fromTo(mapaAnimacionIntroSvg, { y: "-=30" }, { duration: 4, ease: Expo.easeIn });

  }

}
function ZoonRigthMapa(e) {
  e.preventDefault()
  gsap.fromTo(mapaAnimacionIntroSvg, { x: "-=10" }, { duration: 4, ease: Linear.easeNone });
}


function ZoonInMapa(e) {
  e.preventDefault()
  gsap.fromTo(mapaAnimacionIntroSvg, { scaleX: "+=0.3", scaleY: "+=0.3" }, { duration: 4, ease: Linear.easeNone });
}

function ZoonOutMapa(e) {
  e.preventDefault()
  gsap.fromTo(mapaAnimacionIntroSvg, { y: "-=10", scaleX: "-=0.3", scaleY: "-=0.3" }, { duration: 4, ease: Linear.easeNone });
}


function ocultarTooltip(e) {
  switch (e.path[1].id) {
    case 'F1':

      recuadros[2].style.display = 'none'
      break;
    case 'F2':

      recuadros[1].style.display = 'none'
      break;
    case 'F3':

      recuadros[0].style.display = 'none'
      break;
    case 'F4':
      recuadros[3].style.display = 'none'
      break;
    case 'F5':
      recuadros[14].style.display = 'none'
      break;
    case 'F6':
      recuadros[13].style.display = 'none'
      break;
    case 'F10':
      recuadros[6].style.display = 'none'
      break;
    case 'F11':
      recuadros[4].style.display = 'none'
      break;
    case 'F12':
      recuadros[5].style.display = 'none'
      break;
    case 'F13':
      recuadros[12].style.display = 'none'
      break;
    case 'F14':
      recuadros[11].style.display = 'none'
      break;
    case 'F15':
      recuadros[10].style.display = 'none'
      break;
    case 'F16':
      recuadros[9].style.display = 'none'
      break;
    case 'F17':
      recuadros[8].style.display = 'none'
      break;
    case 'F18':
      recuadros[7].style.display = 'none'
      break;

    default:
      break;
  }
}



function InicioActividad() {
  /* audio.muted = true; */


  document.querySelector('.contenido-actividad-bienvenida').style.display = 'none'

  document.querySelector('.contenedor-mapa').style.display = 'block'


  elementoMove = document.querySelector(`.toltip`)

  mapaAnimacionIntroSvg = document.querySelector('.contenedor-mapa')

  let elementosSvgMapaBienvenida = document.querySelector('#mapa-bienvenida')
  elementosSvgMapaBienvenida.addEventListener('load', () => {
    console.log('SVG loaded.');
  })
  console.log(elementosSvgMapaBienvenida);
  let documentoMapaBienvenida = elementosSvgMapaBienvenida.getSVGDocument()
  console.log(documentoMapaBienvenida);
  let elementosDomSvgMapaBienvenida = documentoMapaBienvenida.querySelectorAll('svg g')



  setTimeout(() => {
    if (!verifyMobile()) {
      gsap.fromTo(mapaAnimacionIntroSvg, { x: 0, y: 0, scaleX: 1, scaleY: 1 }, { x: 120, y: 95, scaleX: 1.8, scaleY: 1.8, duration: 6, ease: Linear.easeNone, onComplete: finAnimacion });
    } else {
      gsap.fromTo(mapaAnimacionIntroSvg, { x: 0, y: 0, scaleX: 1, scaleY: 1 }, { x: 100, y: 53, scaleX: 1.8, scaleY: 1.8, duration: 6, ease: Linear.easeNone, onComplete: finAnimacion });
    }
  }, 1900);


  /* let obj = document.getElementById('#mapa-bienvenida');
  obj.addEventListener('touchmove', function(event) {
    // If there's exactly one finger inside this element
    if (event.targetTouches.length == 1) {
      var touch = event.targetTouches[0];
      // Place element where the finger is
      obj.style.left = touch.pageX + 'px';
      obj.style.top = touch.pageY + 'px';
    }
  }, false); */

  partesMapaPuntos = [
    elementosDomSvgMapaBienvenida[1],
    elementosDomSvgMapaBienvenida[2],
    elementosDomSvgMapaBienvenida[3],
    elementosDomSvgMapaBienvenida[4],
    elementosDomSvgMapaBienvenida[5],
    elementosDomSvgMapaBienvenida[6],
    elementosDomSvgMapaBienvenida[7],
    elementosDomSvgMapaBienvenida[8],
    elementosDomSvgMapaBienvenida[9],
    elementosDomSvgMapaBienvenida[10],
    elementosDomSvgMapaBienvenida[11],
    elementosDomSvgMapaBienvenida[12],
    elementosDomSvgMapaBienvenida[13],
    elementosDomSvgMapaBienvenida[14],
    elementosDomSvgMapaBienvenida[15],
    elementosDomSvgMapaBienvenida[16],
    elementosDomSvgMapaBienvenida[17]
  ]


  recuadros = [
    elementosDomSvgMapaBienvenida[18],
    elementosDomSvgMapaBienvenida[19],
    elementosDomSvgMapaBienvenida[20],
    elementosDomSvgMapaBienvenida[21],
    elementosDomSvgMapaBienvenida[22],
    elementosDomSvgMapaBienvenida[23],
    elementosDomSvgMapaBienvenida[24],
    elementosDomSvgMapaBienvenida[25],
    elementosDomSvgMapaBienvenida[26],
    elementosDomSvgMapaBienvenida[27],
    elementosDomSvgMapaBienvenida[28],
    elementosDomSvgMapaBienvenida[29],
    elementosDomSvgMapaBienvenida[30],
    elementosDomSvgMapaBienvenida[31],
    elementosDomSvgMapaBienvenida[32]
  ]




}


/* function overMapaInicio(e) {
  colorOriginal= e.target.style.fill
  e.path[2].style.filter= 'drop-shadow(2px 4px 3px black) brightness(1.2)';
}

function outMapaInicio(e) {
  e.target.style.fill = colorOriginal
  e.path[2].style.filter='none'
} */


function verifyMobile() {
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return isMobile
}

function tooltip(e) {
  switch (e.path[1].id) {
    case 'F1':
      recuadros[2].style.display = 'block'
      break;
    case 'F2':
      recuadros[1].style.display = 'block'
      break;
    case 'F3':
      recuadros[0].style.display = 'block'
      break;
    case 'F4':
      recuadros[3].style.display = 'block'
      break;
    case 'F5':
      recuadros[14].style.display = 'block'
      break;
    case 'F6':
      recuadros[13].style.display = 'block'
      break;
    case 'F10':
      recuadros[6].style.display = 'block'
      break;
    case 'F11':
      recuadros[4].style.display = 'block'
      break;
    case 'F12':
      recuadros[5].style.display = 'block'
      break;
    case 'F13':
      recuadros[12].style.display = 'block'
      break;
    case 'F14':
      recuadros[11].style.display = 'block'
      break;
    case 'F15':
      recuadros[10].style.display = 'block'
      break;
    case 'F16':
      recuadros[9].style.display = 'block'
      break;
    case 'F17':
      recuadros[8].style.display = 'block'
      break;
    case 'F18':
      recuadros[7].style.display = 'block'
      break;

    default:
      break;
  }

}


function overAnimalDrag() {
  audio2 = new Audio(`${path_sound}/overDrag.mp3`);
  audio2.muted = false;
  audio2.play();
}

function outAnimalDrag() {
  audio2.muted = true;
}

function reinciar() {
  window.location.reload()
}

function mostrarFigura(e) {
  mostrarAutores(e.path[1].id)
  document.querySelector('.recuadro-autores').style.display = 'flex'
  /* colorOriginal= e.target.style.fill
  e.path[1].style.filter= 'drop-shadow(2px 4px 3px black) brightness(1.2)'; */
  /* document.querySelector(`#${e.path[2].id}-completo`).style.display='flex' */
}

function ocultarFigura(e) {
  e.target.style.fill = colorOriginal
  e.path[2].style.filter = 'none'
  /* document.querySelector(`#${e.path[2].id}-completo`).style.display='none' */
}

function hidennDiv(e) {
  elementoMove.style.display = 'none'

}

function ocultarAutores() {
  contendorAutoresTexto.forEach(element => {
    document.querySelector(`#${element}`).style.display = 'none'
  });
}

function ocultarAutoresMobile() {

  contendorAutoresTextoMobile.forEach(element => {
    console.log(element)
    document.querySelector(`#${element}`).style.display = 'none'
  });
}

function mostrarAutores(idCLick) {
  if (!verifyMobile()) {
    ocultarAutores()
    switch (idCLick) {
      case 'F1':
        document.querySelector(`#autorC-completo`).style.display = 'flex'
        break;
      case 'F2':
        document.querySelector(`#autorB-incompleto`).style.display = 'flex'
        break;
      case 'F3':
        document.querySelector(`#autorB-completo`).style.display = 'flex'
        break;

      case 'F4':
        document.querySelector(`#autorN-completo`).style.display = 'flex'
        break;
      case 'F5':
        document.querySelector(`#autorM-completo`).style.display = 'flex'
        break;
      case 'F6':
        document.querySelector(`#autorJ-completo`).style.display = 'flex'
        break;

      case 'F8':
        document.querySelector(`#autorH-completo`).style.display = 'flex'
        break;
      case 'F10':
        document.querySelector(`#autorO-completo`).style.display = 'flex'
        break;

      case 'F11':
        document.querySelector(`#autorL-completo`).style.display = 'flex'
        break;
      case 'F12':
        document.querySelector(`#autorK-completo`).style.display = 'flex'
        break;

      case 'F13':
        document.querySelector(`#autorH-incompleto`).style.display = 'flex'
        break;

      case 'F14':
        document.querySelector(`#autorF-completo`).style.display = 'flex'
        break;
      case 'F15':
        document.querySelector(`#autorE-completo`).style.display = 'flex'
        break;
      case 'F16':
        document.querySelector(`#autorD-completo`).style.display = 'flex'
        break;
      case 'F17':
        document.querySelector(`#autorG-completo`).style.display = 'flex'
        break;
      case 'F18':
        document.querySelector(`#autorA-completo`).style.display = 'flex'
        break;

      default:
        break;
    }
  }
  else {
    modal.style.display = "flex";
    ocultarAutoresMobile()
    switch (idCLick) {
      case 'F1':
        document.querySelector(`#autorC-completo-Mobile`).style.display = 'flex'
        break;
      case 'F2':
        document.querySelector(`#autorB-incompleto-Mobile`).style.display = 'flex'
        break;
      case 'F3':
        document.querySelector(`#autorB-completo-Mobile`).style.display = 'flex'
        break;

      case 'F4':
        document.querySelector(`#autorN-completo-Mobile`).style.display = 'flex'
        break;
      case 'F5':
        document.querySelector(`#autorM-completo-Mobile`).style.display = 'flex'
        break;
      case 'F6':
        document.querySelector(`#autorJ-completo-Mobile`).style.display = 'flex'
        break;

      case 'F8':
        document.querySelector(`#autorH-completo-Mobile`).style.display = 'flex'
        break;
      case 'F10':
        document.querySelector(`#autorO-completo-Mobile`).style.display = 'flex'
        break;

      case 'F11':
        document.querySelector(`#autorL-completo-Mobile`).style.display = 'flex'
        break;
      case 'F12':
        document.querySelector(`#autorK-completo-Mobile`).style.display = 'flex'
        break;
      case 'F13':
        document.querySelector(`#autorH-incompleto-Mobile`).style.display = 'flex'
        break;

      case 'F14':
        document.querySelector(`#autorF-completo-Mobile`).style.display = 'flex'
        break;
      case 'F15':
        document.querySelector(`#autorE-completo-Mobile`).style.display = 'flex'
        break;
      case 'F16':
        document.querySelector(`#autorD-completo-Mobile`).style.display = 'flex'
        break;
      case 'F17':
        document.querySelector(`#autorG-completo-Mobile`).style.display = 'flex'
        break;
      case 'F18':
        document.querySelector(`#autorA-completo-Mobile`).style.display = 'flex'
        break;

      default:
        break;
    }
  }

}

function monstrarIntruccionesMobile() {
  if (!verifyMobile()) {

    modalMapa.style.display = "flex";
  } else {

    modalMapa = document.querySelector(".modal-mapa");
    console.log(modalMapa);
    modalMapa.style.display = "flex";
  }
}




function ocultarModal() {
  modal.style.display = "none";
  /*  audio.muted = true; */
}

// When the user clicks anywhere outside of the modal, close it
function ocultarModalVentana(event) {
  console.log(event)
  if (event.target == modal) {
    modal.style.display = "none";
    /*  audio.muted = true; */
  } else {
    modalMapa.style.display = "none";
    if (verifyMobile()) {
      document.querySelector('.descripcion-actividad-mobile').style.display = 'flex'
    }
  }
}

function cargarAudio(animal) {


  /* 
    if (audios_sond[posicion] != null || audios_sond[posicion] != undefined) {
      audio = new Audio(`${path_sound}${audios_sond[posicion]}.mp3`);
      audio.muted=false;
      audio.play();
    } */

}

/* element.addEventListener("touchmove", (e) => {
  if (this.isTouchEventWithElement(e)) return;
  // PERFORM MOUSEOUT ACTION
 });
 
 
 element.addEventListener("touchend", (e) => {
  if (this.isTouchEventWithElement(e)) return;
  // PERFORM MOUSEOUT ACTION
 }); */


function isTouchEventWithElement(TouchEvent) {
  const element = this.getElement();
  const item = e.changedTouches.item(0);
  if (element === null || item === null) return false;
  return element.getBoundingClientRect().right > item.clientX &&
    element.getBoundingClientRect().left < item.clientX &&
    element.getBoundingClientRect().top < item.clientY &&
    element.getBoundingClientRect().bottom > item.clientY;
}

