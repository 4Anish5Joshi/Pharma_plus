$(document).ready(function () {
  $("#nav-head").scrollToFixed();

  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".filter").show("100");
    } else {
      $(".filter")
        .not("." + value)
        .hide("50");
      $(".filter")
        .filter("." + value)
        .show("50");
    }

    // Remove 'active' class from all buttons and add it only to the clicked one
    $(".filter-button").removeClass("active");
    $(this).addClass("active");
  });
});
