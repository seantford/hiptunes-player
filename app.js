var playlist = new Playlist();

var aPunk = new Song("A-Punk", "Vampire Weekend", "2:17");
var elephant = new Song("Elephant", "Tame Impala", "3:31");

var theLifeAquaticWithSteveZissou = new Movie("The Life Aquatic With Steve Zissou", 2004, "1:59:00");

playlist.add(aPunk);
playlist.add(elephant);

playlist.add(theLifeAquaticWithSteveZissou);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}










