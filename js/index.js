$(document).ready(function () {
  $(".toggle").on("click", function () {
    $(".inner").slideUp();

    if (!$(this).next(".inner").is(":visible")) {
      $(this).next(".inner").slideToggle();
    }
  });
});

$("textarea").keyup(function () {
  let maxLength = 100;
  let length = $(this).val().length;
  let AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(AmountLeft);
  }
});

$(".openNav").click(function () {
  $("#leftMenu").animate({ width: "250px" }, 50);
  $(".overlay .content").animate({ marginLeft: "250px" }, 500);
});

$(".closebtn").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $(".overlay .content").animate({ marginLeft: "0px" }, 500);
});

$(document).ready(function () {
  $("#leftMenu a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
});

window.onload = function () {
  countDownToTime("25 october 2024 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
