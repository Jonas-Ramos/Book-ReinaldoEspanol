// function colorNav(){
//     let x = document.getElementById('nav');
//     if(x.style.backgroundColor === "black"){
//         x.style.backgroundColor = "white";
//     } else {
//         x.style.backgroundColor = "black";
//     }
// }
// function colorNavD(){
//     let x = document.getElementById('nav_desktop');
//     if(x.style.backgroundColor === "black"){
//         x.style.backgroundColor = "white";
//     } else {
//         x.style.backgroundColor = "black";
//     }
// }
// function colorText(){
//  let w = document.getElementById('nav_desktop');
//    if(w.style.color === "white"){
//         w.style.color = "black";
//     } else {
//         w.style.color = "white";
//     }
// }
// function colorTextt(){
//  let p = document.getElementById('nav_desktop');
//    if(p.style.color === "white"){
//         p.style.color = "black";
//     } else {
//         p.style.color = "white";
//     }
// }

// function changeText(){
//  var g = document.getElementById('changeText');
//  if (g.innerHTML == 'HOME')
//      g.innerHTML = 'MENU';
//  else g.innerHTML = 'HOME';
// }

// //portada movil   
// /* let x = document.getElementById('nav');
// x.addEventListener('click', (event) => {
//  hero__description.classList.toggle('moveDescription');
//  hero.classList.toggle('moveHero');
//  submenu.classList.toggle('moveSubmenu');
//  translate.classList.toggle('moveTranslate');
//  container_hero.classList.toggle('moveContainer');
        
// }); */

// /* function productPlay(){
//     let productPlay = document.getElementById('grid_container');
//     let productTransitionPlay = document.getElementById('animateTextIn');
//     if (productPlay.style.display === "grid", productTransitionPlay.style.display === "grid"){
//         productPlay.style.display = "none";
//         productTransitionPlay.style.display = "none";
//     }
//     else {
//         productPlay.style.display = "grid";
//         productTransitionPlay.style.display = "grid"
//     }
// } */

// /* 
// const items = ['about', 'product', 'coquet', 'art', 'web', 'motion'] 

// let item0 = items[0];
// let item1 = items[1];
// let item2 = items[2]; */






// let productIn = document.getElementById('submenu');
// productIn.addEventListener('click', (event) => {
//     // submenu.classList.toggle('moveSubmenu');
//     container_hero.classList.remove('moveContainer');
//     menu.classList.toggle('moveSubmenu');
//     container_hero.style.display = 'none';
// })




// //portada desktop
// let d = document.getElementById('nav_desktop');
//  d.addEventListener('click', (event) => {
//  hero__description.classList.toggle('moveDescription');
//  hero.classList.toggle('moveHero');
//  submenu.classList.toggle('moveSubmenu');
//  translate.classList.toggle('moveTranslate');
//  container_hero.classList.toggle('moveContainer');
// });

// window.onscroll = function(){scrollMove()};

// function scrollMove(){
// if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
//  hero__description.classList.add('moveDescription');
//  hero.classList.add('moveHero');
//  submenu.classList.add('moveSubmenu');
//  translate.classList.add('moveTranslate');
//  container_hero.classList.add('moveContainer');
//  nav.style.backgroundColor = "black";
//  nav_desktop.style.backgroundColor = "black";
//  nav_desktop.style.color = "white";
//  document.getElementById('changeText').innerHTML = 'HOME';
 
// } else {
//  hero__description.classList.remove('moveDescription');
//  hero.classList.remove('moveHero');
//  submenu.classList.remove('moveSubmenu');
//  translate.classList.remove('moveTranslate');
//  container_hero.classList.remove('moveContainer');
//  nav.style.backgroundColor = "white";
//  nav_desktop.style.backgroundColor = "white";
//  nav_desktop.style.color = "black";
//  document.getElementById('changeText').innerHTML = 'MENU';
// }
// };

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

//     /* let a = document.getElementById('about');
//     a.addEventListener('click', (event) => {
//         about.classList.toggle('animateTitleStart');
//         coquet.style.opacity = '0';
//         motion.style.opacity = '0';
//         art.style.opacity = '0';
//         product.style.opacity = '0';
//         web.style.opacity = '0';
//     }); */
//     let f = document.getElementById('product');
//     f.addEventListener('click', (event) => {
//         product.classList.toggle('animateTitleStart');
//         product_nav_desktop.classList.toggle('navIn')
//         coquet.style.opacity = '0';
//         about.style.opacity = '0';
//         motion.style.opacity = '0';
//         art.style.opacity = '0';
//         web.style.opacity = '0';
//         nav_desktop.style.width = '0%';
//     });
//     /* let b = document.getElementById('coquet');
//     b.addEventListener('click', (event) => {
//         coquet.classList.toggle('animateTitleStart');
//         about.style.opacity = '0';
//         motion.style.opacity = '0';
//         art.style.opacity = '0';
//         product.style.opacity = '0';
//         web.style.opacity = '0';
//     });     */    
//     /* let r = document.getElementById('art');
//     r.addEventListener('click', (event) => {
//         art.classList.toggle('animateTitleStart');
//         coquet.style.opacity = '0';
//         about.style.opacity = '0';
//         motion.style.opacity = '0';
//         product.style.opacity = '0';
//         web.style.opacity = '0';
//     }); */
//    /*  let e = document.getElementById('web');
//     e.addEventListener('click', (event) => {
//         web.classList.toggle('animateTitleStart');
//         coquet.style.opacity = '0';
//         about.style.opacity = '0';
//         motion.style.opacity = '0';
//         product.style.opacity = '0';
//         art.style.opacity = '0';
//     }); */
//     /* let c = document.getElementById('motion');
//     c.addEventListener('click', (event) => {
//         motion.classList.add('animateTitleStart');
//         coquet.style.opacity = '0';
//         about.style.opacity = '0';
//         art.style.opacity = '0';
//         product.style.opacity = '0';
//         web.style.opacity = '0';
//     });
//      */


//    /*  let y = document.getElementsByClassName('list_text')
//     for (let i= 0; i < y.length; i++){
//         console.log(y[i].classList.add('animateTitleStart'))
//     } */
    

//     // y.addEventListener('onclick', y[i].classList.add('animateTitleStart'), false)
// // }

// //.classList.add('animateTitleStart')