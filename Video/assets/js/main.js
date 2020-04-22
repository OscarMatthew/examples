///////////////////
//Video Play
///////////////////

var slideWrapper = $(".main-slider"),
    iframes = slideWrapper.find('.embed-player'),
    lazyCounter = 0;

// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command){
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}

// When the slide is changing
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, player, video;

  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];
  player = currentSlide.find("iframe").get(0);
  startTime = currentSlide.data("video-start");

  if (slideType === "vimeo") {
    switch (control) {
      case "play":
        if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
          currentSlide.addClass('started');
          postMessageToPlayer(player, {
            "method": "setCurrentTime",
            "value" : startTime
          });
        }
        postMessageToPlayer(player, {
          "method": "play",
          "value" : 1
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "method": "pause",
          "value": 1
        });
        break;
    }
  } else if (slideType === "youtube") {
    switch (control) {
      case "play":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "mute"
        });
        postMessageToPlayer(player, {
          "event": "command",
          "func": "playVideo"
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "pauseVideo"
        });
        break;
    }
  } else if (slideType === "video") {
    video = currentSlide.children("video").get(0);
    if (video != null) {
      if (control === "play"){
        video.play();
      } else {
        video.pause();
      }
    }
  }
}

// DOM Ready
$(function() {
  // Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
  });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });
  slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
    lazyCounter++;
    if (lazyCounter === lazyImages.length){
      lazyImages.addClass('show');
      // slideWrapper.slick("slickPlay");
    }
  });
