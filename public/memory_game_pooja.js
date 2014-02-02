$(document).ready(function(){
  var $card = $("div.card");
  var$button = $(".button");

  $card.on("click", function(){
    var $this = $(this);
    var $chosen;

    $this.toggleClass("chosen");
    $chosen = $(".chosen");

    if($chosen.length === 2) {

    }
    
    if(!$this.hasClass("played") && !$this.hasClass("disabled")) {
      if(!$this.hasClass("chosen")) {
        $this.addClass("chosen");
        $this.find(".color").fadeIn();
        $this.find(".value").fadeOut();
        $cards.not(".chosen").addClass("disabled");
      });
    });
  });

  
});

