$(document).ready(function(){
  var $card = $("div.card");
  var $button = $(".button");

  $card.on("click", function(){
    var $this = $(this);
    var $chosen;
    
    if(!$this.hasClass("played") && !$this.hasClass("disabled")) {
      if(!$this.hasClass("chosen")) {
        $this.find(".picture").removeClass("hide");
        $chosen = $(".chosen");
        $this.addClass("chosen");
        $this.find(".picture").fadeIn();
        $this.find(".defaultpic").addClass("hide").fadeOut();
        if($chosen.length === 2) {
          if( $card.value === $card.value){
            $this.addClass("disabled");
            $this.removeClass("chosen");
          } else{
            $this.removeClass("chosen");
            $this.addClass("hide");
          }
        }
      }
    }
  });
    
  $button.on("click", function(){
    window.location.reload();
  });
  
});

