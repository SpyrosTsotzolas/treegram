$(function() {
  // create an array of the slide images
  var image, imageCounter = 0, imageCache = [];
  var timer;

  $("img").filter("#slide").hover(
    function(){
      slide = $(this);
      caption = $(this).prev("#caption");
      captionText = caption.text();
      imageCounter=0;
      $(this).filter("#slide").next().find("img").each(
        function(){
          image = new Image();
          image.src = $(this).attr("src");
          image.title = $(this).attr("alt");
          image.href = $(this).attr("href");
          imageCache[imageCounter] = image;
          imageCounter++;
        }
      );
      // start slide show
      imageCounter = 0;
      var nextImage;
      timer = setInterval(
        function () {
          caption.fadeOut(1000);
          slide.fadeOut(1000,
            function() {
              imageCounter = (imageCounter + 1) % imageCache.length;
              nextImage = imageCache[imageCounter];
              $(this).attr("href",nextImage.href);
              $(this).attr("src", nextImage.src).fadeIn(1000);
              $(this).prev("#caption").text(nextImage.title).fadeIn(1000);
            }
          );
        },
        3000);
    },
    function(){
      clearInterval(timer);
      nextImage = imageCache[0];
      $(this).attr("href",nextImage.href);
      $(this).attr("src", nextImage.src);
      $(this).prev("#caption").text(captionText);
    }
  );

  $("img").filter("#slide").click(
    function(){
      clearInterval(timer);
    });
});
