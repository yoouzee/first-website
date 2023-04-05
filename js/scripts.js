// The following code is a jQuery code that targets a class of elements on a webpage. 
// It adds an event listener to show or hide a child element when the mouse hovers over or out of the parent element.

$(document).ready(function () {
  // Attach a hover event listener to each element with the class "image"
  $('.image').hover(function () { 
    // When the mouse hovers over the image element, show the sibling element with the class "image-details"
    $(this).siblings('.image-details').show(); 
    // store the original image src in a data attribute
    $(this).data('original-src', $(this).attr('src'));
    // set the src to the alternate image
    $(this).attr('src', $(this).data('alt'));
  }, function () {
    // When the mouse moves out of the image element, hide the sibling element with the class "image-details"
    $(this).siblings('.image-details').hide(); 
    // set the src back to the original image
    $(this).attr('src', $(this).data('original-src'));
  });
});


