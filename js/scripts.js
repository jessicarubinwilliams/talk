$(document).ready(function () {
  $("button#hello").click(function () {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children('li').first().click(function () {
      alert('hi');
    });
    $("ul#webpage").children('li').first().click(function () {
      alert('hi');
    });
    $("ul#user").children('li').first().click(function () {
      $(this).remove();
    });
    $("ul#webpage").children('li').first().click(function () {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function () {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function () {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

  $("button#why").click(function () {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#why2").click(function () {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $("button#dog").click(function () {
    $("ul#user").prepend("<li>Bark!</li>");
    $(".doggy").toggle();
   

    // $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

  $("button#cat").click(function () {
    // $("ul#user").prepend("<li>Meow</li>");
    $("ul#webpage").prepend("<li>Meow</li>");
  });

});