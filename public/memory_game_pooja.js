$(document).ready(function(){
  var $card = $("div.card");
  var $button = $(".button");

  $card.on("click", function(){
    var $this = $(this);
    var $chosen;
    
    if(!$this.hasClass("played")) {
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
        console.log("match!");
        $chosen.addClass("played");
        $chosen.removeClass("chosen");
      } else{
        $chosen.find(".picture").addClass("hide");
        $chosen.find(".defaultpic").removeClass("hide");
        $chosen.removeClass("chosen");
      }
    }
  }

  $button.on("click", function(){
    window.location.reload();
  });
  
});

