let tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    videoId: '8WtRKHwVROs',
    playerVars: {
      'controls': 1,
      'modestbranding': 1,
      'rel': 0,
      'showinfo': 0,
      'fs': 0,
      'autoplay': 0
    }
  });
}
function playVideo() {
  player.playVideo();
  document.getElementById("play").remove();
  document.getElementById("bg").style = 'display:none';
}