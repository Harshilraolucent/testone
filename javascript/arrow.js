$(document).ready(function() {
  $(this).on("click", ".show", function() {
    // $(this).parent().find(".").toggle();
    $(this).find(".fa").toggleClass('active');
  });
});