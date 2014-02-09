$(document).ready(function(){
  var $card = $("div.card");
  var $button = $(".button");

  $card.on("click", function(){
    var $this = $(this);
    var $chosen;
    var $thiscounter = 0;
    
    if(!$this.hasClass("played") && !$this.hasClass("disabled")) {
      if(!$this.hasClass("chosen")) {
        $this.addClass("chosen");
        $chosen = $(".chosen");
        $this.find(".picture").removeClass("hide").fadeIn();
        $this.find(".defaultpic").addClass("hide").fadeOut();
        setTimeout(checkCards, 2000);
      }
    }
  });

  function checkCards() {
    var $chosen = $(".chosen");
    if($chosen.length === 2) {
      if($(".card.chosen").find(".value").eq(0).text() == $(".card.chosen").find(".value").eq(1).text()){
        $chosen.addClass("played");
        $chosen.removeClass("chosen");
      } else{
        $chosen.find(".picture").addClass("hide");
        $chosen.find(".defaultpic").removeClass("hide");
        $card.find(".disabled").removeClass("disabled");
        $chosen.removeClass("chosen");
      }
    }
  }

  $button.on("click", function(){
    window.location.reload();
  });
  
});

