//Auto play/pause videos based on viewport
$(document).ready(function() {

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    var videoElementValue = entry.target.getAttribute('videoElement');
    
    if (entry.isIntersecting) {
      //If it's in view
      if (videoElementValue === 'loopVideo') {
        var autoplaySetting = entry.target.getAttribute('data-autoplay');
        if (autoplaySetting !== "false") {
        entry.target.play();
        }
      }
    } else {
      // If it's out of view
      entry.target.pause();
      if (videoElementValue === 'playedVideo') {
        var playButton = $(entry.target).siblings('.video-embed-button');
        playButton.css('display', 'block');
      }
    }
  });
}

var observer = new IntersectionObserver(handleIntersection, options);
var videos = document.querySelectorAll('[videoElement="loopVideo"], [videoElement="playedVideo"]');

videos.forEach(video => {
  observer.observe(video);
});
});
