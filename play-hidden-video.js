//Play hidden video
$(document).ready(function() {
  function showMainVideo(event) {
    var playedVideo = $(event.target).siblings('[videoElement="playedVideo"]')[0];
    
    if(playedVideo){
      $(event.target).css('display', 'none');
      $(event.target).siblings('.video-embed-button').css('display', 'none');
      $(event.target).siblings('[videoElement="playedVideo"]').css('display', 'block');
      playedVideo.play();
    }
  }
  
  function pausePlayVideo(event) {
    var playButton = $(event.target).siblings('.video-embed-button');
    var playedVideo = event.target;

    if (playedVideo.paused) {
      playButton.css('display', 'none');
      playedVideo.play();
    } else {
      playButton.css('display', 'block');
      playedVideo.pause();
    }
  }

  $('[videoElement="loopVideo"]').click(showMainVideo);
  $('[videoElement="playedVideo"]').click(pausePlayVideo);
  
  $('.video-embed-button').on('click',function(event){
  	$(event.target).closest('.video-embed-button').siblings('[videoElement="loopVideo"]').click();
  });

});
