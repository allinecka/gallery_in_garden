console.log("Galerie-zahrada");


$('a.elipse').on('click', function(e) {
  let cil = $(this).attr('href');
  let rychlost = 1000;

  $("html, body").stop().animate(
      { scrollTop: $(cil).offset().top},
  rychlost);

  e.preventDefault();
});

function prepnoutTridu(element, trida) {
  if (element.className.match(trida)) {
    element.className = element.className.replace(trida, "");
  }
  else {
    element.className += " " + trida;
  }
}