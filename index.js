var songList1 = new Audio('sound/a.mp3');
var songList2 = new Audio('sound/Aise Na Mujhe Tum Dekho.mp3');
var songList3 = new Audio('sound/Mere Haath Mein.mp3');
var songList4 = new Audio('sound/Zara Thehro.mp3');

function songPauseBt() {
  var songpauseAction = document.querySelector(".songPause");
  songpauseAction.addEventListener("click", function() {

    songList1.pause();
    songList2.pause();
    songList3.pause();
    songList4.pause();
    document.body.style.backgroundColor = "#4cd3c2";
  });
}
var songSelctor = document.querySelector(".songRed");
songSelctor.addEventListener("click", function() {
  songList3.pause();
  songList2.pause();
  songList4.pause();
  songList1.play();
  songPauseBt();

  document.body.style.backgroundColor = "red";
});

var songSelctor1 = document.querySelector(".songGreen");
var demo = songSelctor1.addEventListener("click", function() {
  songList2.play();
  songList1.pause();
  songList4.pause();
  songList3.pause();
  songPauseBt();
  document.body.style.backgroundColor = "green";

});

var songSelctor2 = document.querySelector(".songBlue");
songSelctor2.addEventListener("click", function() {
  songList1.pause();
  songList2.pause();
  songList4.pause();
  songList3.play();
  songPauseBt();
  document.body.style.backgroundColor = "blue";
});

var songSelctor3 = document.querySelector(".songYellow");
songSelctor3.addEventListener("click", function() {
  songList3.pause();
  songList2.pause();
  songList1.pause();
  songList4.play();
  songPauseBt();
  document.body.style.backgroundColor = "yellow";
});
