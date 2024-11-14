/*------------------script Navigation Header ----------------------------0*/

let boutonBurger = document.getElementById('burger');
let boutonCroix = document.getElementById('xButton');
let liensNav = document.getElementById('ulNav');

boutonBurger.addEventListener('click', () => {
  liensNav.classList.toggle("openNav");

  if
    (liensNav.classList.contains("openNav")) {

    boutonBurger.src = "x-solid.svg";
    boutonBurger.classList.toggle("rotationLeft");
    boutonBurger.classList.toggle("rotationRight");


  } else {
    boutonBurger.classList.toggle("rotationLeft");
    boutonBurger.classList.toggle("rotationRight");
    boutonBurger.src = "burger-solid.svg";

  }
})

/*------------------script Carousel slides tourne manuellement----------------------------0*/


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("custom-slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/*------------------script automatisation Carousel ----------------------------0*/

const COOLDOWN_DURATION = 4000;
setInterval(function () {
  plusSlides(1);
}, COOLDOWN_DURATION)

/*------------------script cartes de la section "La Carte" ----------------------------0*/


// const carteGeneral = document.querySelector('.cardsDeLaCarte');
// const imageDeLaCarte = document.querySelector('.imageDeLaCarte');
// const texteDelaCarte = document.querySelector('.texteDeLaCarte');
// const prixEtBouton = document.querySelector('.prixEtBoutonCards');

// fetch('laCarte.json')
//   .then(function (rep) {
//     return rep.json();
//   })
//   .then((datas) => {
//     datas.map((data) => {

//       //fonction pour créer les élements html
//       function createNode(elem) {
//         return document.createElement(elem);
//       }

      

//       //fonction pour mettre des éléments html dans d'autres
//       function append(parent, enfant) {
//         return parent.appendChild(enfant);
//       }
      

//       //créer carte générale pour chaque plat

//       let article = createNode('article');
//       article.className = "cardsDeLaCarte";
//       append(carteGeneral, article)

//       //créer la div de l'image
//       let divImage = createNode('div');
//       divImage.className = "imageDeLaCarte";
//       append(article, divImage);


//       //appeler l'image dans sa div 

//       let imgImage = createNode('img');
//       imgImage.className = "imageCards";
//       imgImage.src = data.image;
//       imgImage.alt = "image du plat";

//       //mettre la div de l'image dans la carte générale
//       append (divImage, imgImage);

//       //créer la div du titre et la mettre dans carte générale
//       let divText = createNode('div');
//       divText.className = "texteDelaCarte";
//       append(article, divText);


//       //appeler le titre dans sa div 

//       let hTitre = createNode('h5');
//       hTitre.className = "titreDeLaCarte";
//       hTitre.innerText = data.nom;

//       //mettre la div du titre dans la carte générale
//       append (divText, hTitre);

//       //appeler le texte dans sa div 

//       let pText = createNode('p');
//       pText.className = "pDeLaCarte";
//       pText.innerText = data.texte;

//       //mettre la div du titre dans la carte générale
//       append (divText, pText);

//       //créer la div du prix et bouton et la mettre dans carte générale
//       let divPrixBtn = createNode('div');
//       divPrixBtn.className = "prixEtBoutonCards";
//       append(article, divPrixBtn);


//       //appeler le prix dans sa div 

//       let pPrix = createNode('p');
//       pPrix.className = "pDeLaCarte";
//       pPrix.innerText = data.prix;

//       //mettre la div du prix dans la carte générale
//       append (divText, pPrix);

      
//       })

//     })

//   .catch(function (error) {

//   });

/*------------------script cartes de la section "La Carte" ----------------------------0*/

// external js: isotope.pkgd.js

// init Isotope
var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  // filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}


/*------------------script Carousel Avis slides tourne manuellement----------------------------0*/


let slideIndexAvis = 1;
showSlidesAvis(slideIndexAvis);

function plusSlidesAvis(m) {
  showSlidesAvis(slideIndexAvis += m);
}

function currentSlideAvis(m) {
  showSlidesAvis(slideIndexAvis = m);
}

function showSlidesAvis(m) {
  let j;
  let slidesAvis = document.getElementsByClassName("custom-sliderAvis");
  let btnSlide = document.getElementsByClassName("btnSliderAvis");
  if (m > slidesAvis.length) {
    slideIndexAvis = 1
  }
  if (m < 1) {
    slideIndexAvis = slidesAvis.length
  }
  for (j = 0; j < slidesAvis.length; j++) {
    slidesAvis[j].style.display = "none";
  }
  for (j = 0; j < btnSlide.length; j++) {
    btnSlide[j].className = btnSlide[j].className.replace(" active", "");
  }
  slidesAvis[slideIndexAvis - 1].style.display = "block";
  btnSlide[slideIndexAvis - 1].className += " active";
}

/*------------------script automatisation Carousel Avis----------------------------0*/

const COOLDOWN_DURATION_AVIS = 4000;
setInterval(function () {
  plusSlidesAvis(1);
}, COOLDOWN_DURATION_AVIS)