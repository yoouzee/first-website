$(document).ready(function() {
    $('.image').each(function() {
      var alt = $(this).attr('alt');
      var img = new Image();
      img.onload = function() {
        $(img).data('loaded', true);
      };
      img.src = 'images/' + alt + '-large.jpg';
      $(this).data('large-img', img);
    }).hover(
      function() {
        var $this = $(this);
        var origSrc = $this.attr('src');
        var largeImg = $this.data('large-img');
        if (largeImg && $(largeImg).data('loaded')) {
          $this.data('orig-src', origSrc);
          $this.attr('src', largeImg.src);
        }
      },
      function() {
        var $this = $(this);
        var origSrc = $this.data('orig-src');
        if (origSrc) {
          $this.attr('src', origSrc);
        }
      }
    );
  });
  