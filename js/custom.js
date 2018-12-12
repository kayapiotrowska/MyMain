

/* jQuery Pre loader */
 $(window).load(function() {
     setTimeout(
         function() {
             $('.loader-wrapper').fadeOut();
         }, 2000);
 });



 /* Vegas Slides*/

 $(function() {
     $('body').vegas({
         slides: [
             { src: 'img/banner1.jpg' },
             { src: 'img/banner2.jpg' }
         ],
         timer: ['false'],
         transition: [ 'zoomIn'],
         animation: ['kenburns'],
         delay: ['8000'],
     });
 });


/* Home Slideshow Vegas
 -----------------------------------------------*/
/* $(function() {
   $('body').vegas({
       slides: [
         { src: '/img/banner1.jpg' },
         { src: '/img/banner2.jpg' }
       ],
       timer: false,
       transition: [ 'zoomIn', ],
       animation: ['kenburns'],
       overlay: '/js/vegas/dist/overlays/08.png',
       transition: 'flash'
   });
 });



 ---


 $elmt.vegas({
    slides: [
        { src: './img/banner1.jpg' },
        { src: './img/banner2.jpg' },
    ],

});
*/
