$(document).ready(function(){
  var $card = $("div.card");
  var $button = $(".button");




  $card.on("click", function(){
    var $this = $(this);
    var $chosen;
    
    $this.removeClass("hide");
    $chosen = $(".chosen");
    $this.toggleClass("chosen");
    if($chosen.length === 2) {

    }
    
    if(!$this.hasClass("played") && !$this.hasClass("disabled")) {
      if(!$this.hasClass("chosen")) {
        $this.addClass("chosen");
        $this.find(".picture").fadeIn();
        $this.find(".value").fadeOut();
        $cards.not(".chosen").addClass("disabled");
      });
    });
  });

  $button.on("click", function(){
    location.reload();
  });
  
});

