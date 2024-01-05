/* Lightbox Luminous */
// new LuminousGallery(document.querySelectorAll(".expansion"));
new LuminousGallery(document.querySelectorAll('.expansion'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

/* Fadeup Animation AOS */
// AOS.init();
AOS.init({
  duration: 500
});