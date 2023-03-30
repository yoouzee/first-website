$(document).ready(function() {
  $('.image-wrapper').hover(function() {
      $(this).find('.image-details').show();
  }, function() {
      $(this).find('.image-details').hide();
  });
});
