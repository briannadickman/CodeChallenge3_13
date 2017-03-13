var clickCounter = 0;

$(document).ready(function(){
  generateDiv();
  swapColor();
  deleteDiv();
});

function generateDiv(){
  $(".button-container").append("<button>Generate</button>");
  $(".button-container").on("click", "button", function(){
    appendDiv();
    clickCounter++;
  });
}

        function appendDiv(){
            $(".container").append("<div class='childDiv'></div>");
            $(".container").children().last().append("<p>" + clickCounter + "</p>");
            $(".childDiv").last().append("<button class='swap'>Swap</button><button class='delete'>Delete</button>");
          }

function swapColor(){
  $(document).on("click", ".swap", function(){
      $(this).parent().toggleClass("yellow");
    });
}


function deleteDiv(){
  $(document).on("click", ".delete", function(){
      $(this).parent().remove();
    });
}
